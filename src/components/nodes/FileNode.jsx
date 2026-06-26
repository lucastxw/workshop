import { memo } from 'react'
import { useStore } from '../../store'

/* File "square" — a movable container that auto-resizes (handled in the store /
 * MapView derivation) to fit the function pills dropped inside it. Double-click
 * opens the terminal editor modal. */
function FileNode({ id, data }) {
  const focusedFileId = useStore((s) => s.focusedFileId)
  const openTerminal = useStore((s) => s.openTerminal)
  const isHighlighted = focusedFileId === id

  return (
    <div
      onDoubleClick={(e) => {
        e.stopPropagation()
        openTerminal(id)
      }}
      className={[
        'relative h-full w-full rounded-xl border bg-slate-900/80 backdrop-blur-sm transition-all',
        isHighlighted
          ? 'border-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.7),0_0_22px_rgba(251,191,36,0.35)]'
          : 'border-slate-700 shadow-lg shadow-black/40',
      ].join(' ')}
      style={{ width: data.width, height: data.height }}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-slate-700/70">
        <span className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </span>
        <span className="truncate text-[11px] font-mono text-slate-200">{data.name}</span>
        <span className="ml-auto truncate text-[9px] text-slate-500">{data.folderPath}</span>
      </div>
    </div>
  )
}

export default memo(FileNode)
