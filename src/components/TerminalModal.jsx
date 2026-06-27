import { useEffect } from 'react'
import { useStore } from '../store'

/* Terminal editor modal — opened by double-clicking a File (node or explorer
 * row). A mock code/terminal surface generated from the file's functions. */
export default function TerminalModal() {
  const terminalFileId = useStore((s) => s.terminalFileId)
  const closeTerminal = useStore((s) => s.closeTerminal)
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeTerminal()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeTerminal])

  if (!terminalFileId) return null
  const file = files[terminalFileId]
  if (!file) return null
  const fns = Object.values(functions).filter((f) => f.fileId === terminalFileId)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeTerminal}>
      <div
        className="flex h-[70vh] w-[760px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2">
          <span className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          <span className="ml-2 font-mono text-xs text-slate-300">
            {file.folderPath}/{file.name}
          </span>
          <button onClick={closeTerminal} className="ml-auto text-slate-500 hover:text-slate-100">✕</button>
        </div>

        {/* editor body */}
        <div className="thin-scroll flex-1 overflow-auto bg-[#0b0e14] p-4 font-mono text-[13px] leading-relaxed">
          <div className="text-slate-500">{'// ' + file.name + ' — ' + fns.length + ' functions'}</div>
          <div className="mt-2">
            <span className="text-fuchsia-400">import</span> <span className="text-slate-300">{'{ runtime }'}</span>{' '}
            <span className="text-fuchsia-400">from</span> <span className="text-emerald-400">'../runtime'</span>
          </div>
          {fns.map((fn) => (
            <div key={fn.id} className="mt-4">
              <span className="text-sky-400">export function</span>{' '}
              <span className="text-amber-300">{fn.name.replace('()', '')}</span>
              <span className="text-slate-300">(args) {'{'}</span>
              <div className="pl-6 text-slate-400">
                <span className="text-fuchsia-400">return</span> runtime.exec(<span className="text-emerald-400">'{fn.name}'</span>)
              </div>
              <span className="text-slate-300">{'}'}</span>
            </div>
          ))}
          {fns.length === 0 && <div className="mt-4 text-slate-600">{'// empty file — add a function from the canvas'}</div>}
        </div>

        {/* prompt line */}
        <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-2 font-mono text-xs">
          <span className="text-emerald-400">➜</span>
          <span className="text-sky-400">{file.folderPath}</span>
          <span className="text-slate-300">$ </span>
          <span className="text-slate-500">vim {file.name}</span>
          <span className="ml-1 inline-block h-3.5 w-2 animate-pulse bg-slate-400" />
        </div>
      </div>
    </div>
  )
}
