import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { useStore } from '../../store'
import { FILE_EXT_COLOR } from '../../projectGraph'

/* A real file from the directory. Clicking it selects it; the store then drives
 * the directional arrows + dimming for the whole map.
 *
 * Relationship to the currently selected file decides the look:
 *   selected   → highlighted ring
 *   downstream → this file is AFFECTED BY the selection (selection points here)
 *   upstream   → this file AFFECTS the selection (it points at the selection)
 *   dim        → not involved → faded out
 */
function ProjectFileNode({ id, data }) {
  const selected = useStore((s) => s.selectedProjectFileId)
  const projectEdges = useStore((s) => s.projectEdges)
  const selectProjectFile = useStore((s) => s.selectProjectFile)

  let relation = 'idle'
  if (selected) {
    if (selected === id) relation = 'selected'
    else if (projectEdges.some((e) => e.source === selected && e.target === id)) relation = 'downstream'
    else if (projectEdges.some((e) => e.target === selected && e.source === id)) relation = 'upstream'
    else relation = 'dim'
  }

  const ext = data.name.split('.').pop()
  const dot = FILE_EXT_COLOR[ext] || '#64748b'

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
      onClick={(e) => {
        e.stopPropagation()
        selectProjectFile(selected === id ? null : id)
      }}
      className={[
        'flex cursor-pointer flex-col rounded-lg border px-3 py-2 transition-all duration-200',
        shell,
        relation === 'dim' ? 'opacity-20 hover:opacity-50' : 'opacity-100',
      ].join(' ')}
      style={{ width: 174, height: 62 }}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !bg-amber-400" />
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: dot }} />
        <span className="truncate font-mono text-[12px] text-slate-100">{data.name}</span>
      </div>
      <span className="mt-1 truncate pl-[18px] text-[9px] text-slate-500">{data.folder}</span>
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !bg-emerald-400" />
    </div>
  )
}

export default memo(ProjectFileNode)
