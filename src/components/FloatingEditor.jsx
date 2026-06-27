import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore, getFileContent } from '../store'
import { parseFunctions } from '../projectGraph'
import AiSummary from './AiSummary'
import { supabase } from '../lib/supabase'

/* Floating, draggable panel opened when a project file is clicked:
 *   • text  → a line-numbered code viewer that highlights a function's lines.
 *             Jump via the in-editor "ƒ Jump to…" dropdown OR by clicking a
 *             function pill on the canvas. Toggle to Edit for an editable view.
 *   • image → image viewer   • audio → audio player
 */
export default function FloatingEditor() {
  const editorFileId = useStore((s) => s.editorFileId)
  const projectFiles = useStore((s) => s.projectFiles)
  const closeEditor = useStore((s) => s.closeEditor)
  const setFileEdit = useStore((s) => s.setFileEdit)
  const revertFileEdit = useStore((s) => s.revertFileEdit)
  const fileEdits = useStore((s) => s.fileEdits)
  const saveProjectFile = useStore((s) => s.saveProjectFile)
  const supabaseLoading = useStore((s) => s.supabaseLoading)
  // subscribe so the textarea re-renders on external content changes
  const content = useStore((s) => (editorFileId ? getFileContent(s, editorFileId) : ''))
  const scrollTarget = useStore((s) => s.editorScrollTarget)

  const [tab, setTab] = useState('code') // 'code' | 'ai'
  const [editMode, setEditMode] = useState(false)
  const [highlight, setHighlight] = useState(null) // { start, end } 1-based
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const drag = useRef(null)
  const audioRef = useRef(null)
  const scrollRef = useRef(null)
  const hotLineRef = useRef(null)

  const file = editorFileId ? projectFiles[editorFileId] : null
  const lines = useMemo(() => content.split('\n'), [content])
  const fns = useMemo(() => (file?.kind === 'text' ? parseFunctions(content) : []), [content, file?.kind])

  const jumpTo = (start, end) => {
    setTab('code')
    setEditMode(false)
    setHighlight({ start, end: end || start })
  }

  // Reset view each time a new file opens.
  useEffect(() => {
    if (editorFileId) {
      setPos({ x: Math.max(24, window.innerWidth - 490), y: 90 })
      setTab('code')
      setEditMode(false)
      setHighlight(null)
    }
  }, [editorFileId])

  // A function pill on the canvas was clicked.
  useEffect(() => {
    if (!scrollTarget || !editorFileId) return
    const f = useStore.getState().projectFiles[editorFileId]
    if (!f || f.kind !== 'text' || scrollTarget.path !== f.path) return
    jumpTo(scrollTarget.line, scrollTarget.endLine)
  }, [scrollTarget, editorFileId])

  // Scroll the highlighted chunk into view, contained to the panel's scroller.
  useEffect(() => {
    if (!highlight || tab !== 'code' || editMode) return
    let raf2
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = hotLineRef.current
        const sc = scrollRef.current
        if (!el || !sc) return
        const elRect = el.getBoundingClientRect()
        const scRect = sc.getBoundingClientRect()
        sc.scrollTop += elRect.top - scRect.top - sc.clientHeight / 3
      })
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [highlight, tab, editMode, content])

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current) return
      setPos({ x: e.clientX - drag.current.dx, y: e.clientY - drag.current.dy })
    }
    const onUp = () => (drag.current = null)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeEditor()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeEditor])

  if (!editorFileId || !file) return null

  const edited = file.path in fileEdits
  const startDrag = (e) => {
    drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
  }

  return (
    <div
      className="fixed z-50 flex w-[480px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl"
      style={{ left: pos.x, top: pos.y, height: file.kind === 'text' ? 460 : 'auto' }}
    >
      {/* title bar (drag handle) */}
      <div
        onMouseDown={startDrag}
        className="flex cursor-grab items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2 active:cursor-grabbing"
      >
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="h-3 w-3 rounded-full bg-amber-500" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <span className="ml-1 truncate font-mono text-xs text-slate-300">{file.path}</span>
        {edited && <span className="rounded bg-amber-500/20 px-1.5 text-[10px] text-amber-300">● edited</span>}
        <span className="ml-auto rounded bg-slate-800 px-1.5 text-[10px] uppercase text-slate-400">{file.kind}</span>
        <button onClick={closeEditor} className="text-slate-500 hover:text-white">✕</button>
      </div>

      {/* body */}
      {file.kind === 'text' && (
        <div className="flex min-h-0 flex-1 flex-col">
          {/* Code / AI tabs */}
          <div className="flex items-center gap-1 border-b border-slate-800 bg-slate-900/60 px-2 py-1 text-[11px]">
            <TabBtn active={tab === 'code'} onClick={() => setTab('code')}>{'</> Code'}</TabBtn>
            <TabBtn active={tab === 'ai'} onClick={() => setTab('ai')}>✨ AI Explain</TabBtn>
            <span className="ml-auto pr-1 text-[10px] text-slate-600">Claude</span>
          </div>

          {tab === 'code' ? (
            <div className="flex min-h-0 flex-1 flex-col">
              {/* toolbar: jump-to-function + edit toggle */}
              <div className="flex items-center gap-2 border-b border-slate-800/60 px-2 py-1 text-[10px] text-slate-500">
                <select
                  value=""
                  onChange={(e) => {
                    const fn = fns[Number(e.target.value)]
                    if (fn) jumpTo(fn.line, fn.endLine)
                  }}
                  disabled={editMode || fns.length === 0}
                  className="max-w-[150px] rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[11px] text-slate-200 outline-none disabled:opacity-40"
                  title="Jump to a function"
                >
                  <option value="">ƒ Jump to… ({fns.length})</option>
                  {fns.map((fn, i) => (
                    <option key={i} value={i}>
                      {fn.name} :{fn.line}
                    </option>
                  ))}
                </select>
                <button onClick={() => setEditMode((v) => !v)} className="rounded px-2 py-0.5 text-slate-300 hover:bg-slate-800">
                  {editMode ? '👁 View' : '✎ Edit'}
                </button>
                {edited && (
                  <button onClick={() => revertFileEdit(file.path)} className="rounded px-2 py-0.5 text-amber-300 hover:bg-slate-800">
                    Revert
                  </button>
                )}
                {highlight && !editMode && (
                  <span className="font-medium text-indigo-300">
                    L{highlight.start}–{highlight.end}
                  </span>
                )}
                <span className="ml-auto text-slate-500">
                  {lines.length} lines · {supabase ? 'Supabase mode' : 'local mode'}
                </span>
                <button
                  disabled={!edited || supabaseLoading}
                  onClick={() => saveProjectFile(file.path)}
                  className="rounded bg-indigo-600 px-3 py-1 font-semibold text-white enabled:hover:bg-indigo-500 disabled:opacity-40 transition"
                >
                  {supabaseLoading ? 'Saving...' : 'Save'}
                </button>
              </div>

              {editMode ? (
                <textarea
                  spellCheck={false}
                  value={content}
                  onChange={(e) => setFileEdit(file.path, e.target.value)}
                  className="thin-scroll min-h-0 flex-1 resize-none bg-[#0b0e14] p-3 font-mono text-[12.5px] leading-5 text-slate-200 outline-none"
                />
              ) : (
                <div ref={scrollRef} className="thin-scroll min-h-0 flex-1 overflow-auto bg-[#0b0e14] py-2 font-mono text-[12.5px] leading-5">
                  <div className="w-max min-w-full">
                    {lines.map((ln, i) => {
                      const n = i + 1
                      const hot = highlight && n >= highlight.start && n <= highlight.end
                      return (
                        <div
                          key={i}
                          ref={hot && n === highlight.start ? hotLineRef : undefined}
                          className={hot ? 'bg-indigo-500/25 ring-1 ring-inset ring-indigo-500/30' : ''}
                        >
                          <span
                            className={[
                              'sticky left-0 inline-block w-12 select-none px-2 text-right tabular-nums',
                              hot ? 'bg-indigo-600/40 font-semibold text-indigo-200' : 'bg-[#0b0e14] text-slate-600',
                            ].join(' ')}
                          >
                            {n}
                          </span>
                          <span className="whitespace-pre pr-4 text-slate-200">{ln === '' ? ' ' : ln}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <AiSummary file={file} content={content} />
          )}
        </div>
      )}

      {file.kind === 'image' && (
        <div className="flex items-center justify-center bg-[repeating-conic-gradient(#1e2533_0%_25%,#11151f_0%_50%)] bg-[length:24px_24px] p-4">
          <img src={file.url} alt={file.name} className="max-h-[320px] max-w-full rounded-lg object-contain" />
        </div>
      )}

      {file.kind === 'audio' && (
        <div className="flex flex-col items-center gap-3 p-5">
          <button
            onClick={() => audioRef.current?.play()}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-lg transition hover:bg-indigo-500 active:scale-95"
            title="Play"
          >
            ▶
          </button>
          <audio ref={audioRef} src={file.url} controls className="w-full" />
          <span className="text-[11px] text-slate-500">{file.name}</span>
        </div>
      )}
    </div>
  )
}

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded px-2 py-1 font-medium transition-colors',
        active ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
