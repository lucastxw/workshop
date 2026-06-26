import { useMemo } from 'react'
import { useStore } from '../store'

/* File Explorer (top-left). Left-clicking a file highlights it and focuses it
 * in the map view. Files are grouped by their folder path. */
export default function FileExplorer() {
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)
  const focusedFileId = useStore((s) => s.focusedFileId)
  const focusFile = useStore((s) => s.focusFile)
  const openTerminal = useStore((s) => s.openTerminal)

  const grouped = useMemo(() => {
    const g = {}
    for (const f of Object.values(files)) {
      ;(g[f.folderPath] ||= []).push(f)
    }
    return Object.entries(g).sort(([a], [b]) => a.localeCompare(b))
  }, [files])

  const fnCount = (fileId) => Object.values(functions).filter((f) => f.fileId === fileId).length

  return (
    <div className="flex h-full flex-col bg-panel">
      <Header title="File Explorer" badge={Object.keys(files).length} />
      <div className="thin-scroll flex-1 overflow-auto py-1">
        {grouped.map(([folder, list]) => (
          <div key={folder} className="mb-1">
            <div className="flex items-center gap-1.5 px-3 py-1 text-[11px] text-slate-500">
              <span>▾</span>
              <span className="truncate font-mono">{folder}</span>
            </div>
            {list.map((f) => {
              const active = focusedFileId === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => focusFile(f.id)}
                  onDoubleClick={() => openTerminal(f.id)}
                  className={[
                    'group flex w-full items-center gap-2 py-1 pl-7 pr-3 text-left text-[13px] transition-colors',
                    active ? 'bg-amber-500/15 text-amber-200' : 'text-slate-300 hover:bg-slate-800/60',
                  ].join(' ')}
                >
                  <span className={active ? 'text-amber-400' : 'text-slate-500'}>▢</span>
                  <span className="flex-1 truncate font-mono">{f.name}</span>
                  <span className="rounded bg-slate-800 px-1.5 text-[10px] text-slate-400 group-hover:bg-slate-700">{fnCount(f.id)}</span>
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Header({ title, badge, action }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
      <div className="flex items-center gap-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{title}</h2>
        {badge != null && <span className="rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-400">{badge}</span>}
      </div>
      {action}
    </div>
  )
}
