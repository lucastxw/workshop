import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { useStore } from '../../store'
import { FILE_EXT_COLOR } from '../../projectGraph'

/* A real file from the directory. Selection is driven by React Flow (single
 * click, Ctrl/⌘-click, or marquee). The store then decides the look:
 *   • single active file → ring + directional dependency arrows + ƒ pills
 *   • multi-selection     → selected files stay lit, the rest dim
 *   • single active's deps → downstream (green) / upstream (amber) tint
 */
function ProjectFileNode({ id, data }) {
  const activeId = useStore((s) => s.selectedProjectFileId)
  const selectedFileIds = useStore((s) => s.selectedFileIds)
  const projectEdges = useStore((s) => s.projectEdges)
  const openEditor = useStore((s) => s.openEditor)

  const multi = selectedFileIds.length >= 2
  let relation = 'idle'
  if (multi) {
    relation = selectedFileIds.includes(id) ? 'selected' : 'dim'
  } else if (activeId) {
    if (activeId === id) relation = 'selected'
    else if (projectEdges.some((e) => e.source === activeId && e.target === id)) relation = 'downstream'
    else if (projectEdges.some((e) => e.target === activeId && e.source === id)) relation = 'upstream'
    else relation = 'dim'
  }

  const ext = data.name.split('.').pop()
  const dot = FILE_EXT_COLOR[ext] || '#64748b'
  const kindIcon = data.kind === 'image' ? '🖼' : data.kind === 'audio' ? '🔊' : null

  const shell =
    relation === 'selected'
      ? 'border-indigo-400 bg-indigo-500/20 shadow-[0_0_0_1px_rgba(99,102,241,0.7),0_0_20px_rgba(99,102,241,0.4)]'
      : relation === 'downstream'
      ? 'border-emerald-400/80 bg-slate-800/90'
      : relation === 'upstream'
      ? 'border-amber-400/80 bg-slate-800/90'
      : 'border-slate-700 bg-slate-800/80 hover:border-slate-500'

  return (
    <div
      onDoubleClick={(e) => {
        e.stopPropagation()
        openEditor(id)
      }}
      title="Double-click to open · drag a box / Ctrl+click to multi-select · drag a selected file to move the group"
      className={[
        'flex h-full w-full cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200',
        shell,
        relation === 'dim' ? 'opacity-20 hover:opacity-50' : 'opacity-100',
      ].join(' ')}
      style={{ width: 178, height: 64 }}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !bg-amber-400" />
      <div className="flex items-center gap-2">
        {kindIcon ? (
          <span className="text-[13px] leading-none">{kindIcon}</span>
        ) : (
          <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: dot }} />
        )}
        <span className="truncate font-mono text-[12px] text-slate-100">{data.name}</span>
      </div>
      <span className="mt-1 truncate pl-[18px] text-[9px] text-slate-500">{data.folder}</span>
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !bg-emerald-400" />
    </div>
  )
}

export default memo(ProjectFileNode)
