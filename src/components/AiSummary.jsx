import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store'
import { streamFileSummary, AI_MODELS } from '../lib/ai'

/* AI "Explain this file" panel. Streams a Claude-generated summary of the
 * file's real source. Requires a user-supplied Anthropic API key (kept in
 * localStorage) since this prototype has no backend to hold one. */
export default function AiSummary({ file, content }) {
  const apiKey = useStore((s) => s.apiKey)
  const setApiKey = useStore((s) => s.setApiKey)
  const aiModel = useStore((s) => s.aiModel)
  const setAiModel = useStore((s) => s.setAiModel)
  const summaries = useStore((s) => s.summaries)
  const setSummary = useStore((s) => s.setSummary)

  const [text, setText] = useState('')
  const [status, setStatus] = useState('idle') // idle | thinking | streaming | done | error
  const [error, setError] = useState(null)
  const [keyDraft, setKeyDraft] = useState('')
  const abortRef = useRef(null)

  // Load any cached summary when the open file changes; cancel in-flight stream.
  useEffect(() => {
    abortRef.current?.abort()
    const cached = summaries[file.path]
    setText(cached || '')
    setStatus(cached ? 'done' : 'idle')
    setError(null)
  }, [file.path]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => abortRef.current?.abort(), [])

  const run = async () => {
    if (!apiKey) return
    setError(null)
    setText('')
    setStatus('thinking')
    const ctrl = new AbortController()
    abortRef.current = ctrl
    let first = true
    try {
      const full = await streamFileSummary({
        apiKey,
        path: file.path,
        content,
        model: aiModel,
        signal: ctrl.signal,
        onText: (delta) => {
          if (first) {
            first = false
            setStatus('streaming')
          }
          setText((t) => t + delta)
        },
      })
      setSummary(file.path, full)
      setStatus('done')
    } catch (e) {
      if (e?.name === 'AbortError') return
      setError(e?.message || String(e))
      setStatus('error')
    }
  }

  const busy = status === 'thinking' || status === 'streaming'

  /* ---------- no key yet: collect one ---------- */
  if (!apiKey) {
    return (
      <div className="flex-1 overflow-auto p-4 text-sm">
        <div className="mb-3 text-slate-300">Add an Anthropic API key to explain files with Claude.</div>
        <input
          type="password"
          value={keyDraft}
          onChange={(e) => setKeyDraft(e.target.value)}
          placeholder="sk-ant-..."
          className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-xs text-slate-100 outline-none focus:border-indigo-500"
        />
        <button
          onClick={() => keyDraft.trim() && setApiKey(keyDraft.trim())}
          className="mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Save key
        </button>
        <p className="mt-3 text-[11px] leading-relaxed text-amber-300/80">
          ⚠️ The key is stored in your browser and sent directly to Anthropic from this page. Fine for local
          prototyping — for production, proxy requests through a backend instead.
        </p>
      </div>
    )
  }

  /* ---------- main panel ---------- */
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center gap-2 border-b border-slate-800 px-3 py-2 text-xs">
        <select
          value={aiModel}
          onChange={(e) => setAiModel(e.target.value)}
          disabled={busy}
          className="rounded border border-slate-700 bg-slate-800 px-1.5 py-1 text-[11px] text-slate-200 outline-none"
        >
          {AI_MODELS.map((m) => (
            <option key={m.id} value={m.id}>{m.label}</option>
          ))}
        </select>
        <button
          onClick={busy ? () => abortRef.current?.abort() : run}
          className={[
            'rounded px-2.5 py-1 font-medium text-white',
            busy ? 'bg-rose-600 hover:bg-rose-500' : 'bg-indigo-600 hover:bg-indigo-500',
          ].join(' ')}
        >
          {busy ? 'Stop' : status === 'done' ? '↻ Regenerate' : '✨ Explain'}
        </button>
        <button onClick={() => setApiKey('')} className="ml-auto text-slate-500 hover:text-slate-300" title="Forget API key">
          key ✕
        </button>
      </div>

      <div className="thin-scroll flex-1 overflow-auto p-3 text-[13px] leading-relaxed">
        {status === 'idle' && (
          <div className="text-slate-500">Click <span className="text-indigo-300">✨ Explain</span> to summarise this file with Claude.</div>
        )}
        {status === 'thinking' && <div className="animate-pulse text-slate-400">Analyzing the file…</div>}
        {error && <div className="rounded-md border border-rose-700/60 bg-rose-900/30 p-2 text-rose-200">{error}</div>}
        {text && <Markdown text={text} />}
        {status === 'streaming' && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-indigo-400 align-middle" />}
      </div>
    </div>
  )
}

/* ---------- tiny, safe markdown renderer (headings, bullets, bold, code) ---------- */
function renderInline(line, keyPrefix) {
  const nodes = []
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) nodes.push(line.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) nodes.push(<strong key={`${keyPrefix}-b${i}`} className="text-slate-100">{tok.slice(2, -2)}</strong>)
    else nodes.push(<code key={`${keyPrefix}-c${i}`} className="rounded bg-slate-800 px-1 font-mono text-[12px] text-cyan-200">{tok.slice(1, -1)}</code>)
    last = m.index + tok.length
    i++
  }
  if (last < line.length) nodes.push(line.slice(last))
  return nodes
}

function Markdown({ text }) {
  const lines = text.split('\n')
  return (
    <div className="space-y-1 text-slate-300">
      {lines.map((line, idx) => {
        const heading = line.match(/^\*\*(.+)\*\*\s*$/)
        if (heading) {
          return <div key={idx} className="pt-2 text-[11px] font-semibold uppercase tracking-wider text-indigo-300">{heading[1]}</div>
        }
        if (/^\s*[-*]\s+/.test(line)) {
          return (
            <div key={idx} className="flex gap-2 pl-1">
              <span className="text-slate-600">•</span>
              <span>{renderInline(line.replace(/^\s*[-*]\s+/, ''), idx)}</span>
            </div>
          )
        }
        if (line.trim() === '') return <div key={idx} className="h-1" />
        return <p key={idx}>{renderInline(line, idx)}</p>
      })}
    </div>
  )
}
