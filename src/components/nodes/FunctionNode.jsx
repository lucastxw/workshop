import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { useStore } from '../../store'

/* Function "pill" — lives inside a File node. Single-click focuses it, which
 * drives the entire dim / edge / port system from the store. */
function FunctionNode({ id, data }) {
  const focusedNodeId = useStore((s) => s.focusedNodeId)
  const functions = useStore((s) => s.functions)
  const setFocusedNode = useStore((s) => s.setFocusedNode)

  const isFocused = focusedNodeId === id
  const focusedFn = focusedNodeId ? functions[focusedNodeId] : null
  // Dim other functions that share the focused function's parent file.
  const dimmed = focusedFn && !isFocused && focusedFn.fileId === data.fileId

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        setFocusedNode(isFocused ? null : id)
      }}
      className={[
        'group relative flex items-center gap-2 rounded-full border px-3 text-[12px] font-mono select-none cursor-pointer transition-all duration-150',
        isFocused
          ? 'border-indigo-400 bg-indigo-500/25 text-slate-100 shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_0_18px_rgba(99,102,241,0.45)]'
          : dimmed
          ? 'border-slate-700/60 bg-transparent text-slate-500'
          : 'border-slate-600 bg-slate-700/70 text-slate-100 hover:border-slate-400',
      ].join(' ')}
      style={{ width: data.width, height: data.height }}
    >
      <Handle type="target" position={Position.Left} className="!bg-slate-400" />
      <span
        className={[
          'h-2 w-2 shrink-0 rounded-full',
          isFocused ? 'bg-indigo-300' : dimmed ? 'bg-slate-600' : 'bg-emerald-400',
        ].join(' ')}
      />
      <span className="truncate">{data.name}</span>
      <Handle type="source" position={Position.Right} className="!bg-slate-400" />
    </div>
  )
}

export default memo(FunctionNode)
