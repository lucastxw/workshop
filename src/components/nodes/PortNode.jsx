import { memo } from 'react'
import { Handle, Position } from 'reactflow'

/* Port — a small coloured connector that materialises on a File's left/right
 * edge when one of its functions is focused.
 *   side: 'left'  → an external function CALLS the focused one (upstream)
 *   side: 'right' → the focused function CALLS an external one (downstream)
 * Colour is keyed to the external file the call crosses to. */
function PortNode({ data }) {
  const isLeft = data.side === 'left'
  return (
    <div className="group relative nodrag" style={{ width: 16, height: 16 }}>
      <div
        className="h-4 w-4 rounded-full ring-2 ring-slate-950 transition-transform group-hover:scale-125"
        style={{ background: data.color, boxShadow: `0 0 10px ${data.color}` }}
      />
      {/* Left ports emit (source on their right); right ports receive (target on their left). */}
      {isLeft ? (
        <Handle type="source" position={Position.Right} style={{ background: data.color }} />
      ) : (
        <Handle type="target" position={Position.Left} style={{ background: data.color }} />
      )}

      {/* hover tooltip naming the external function + file */}
      <div
        className={[
          'pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-200 opacity-0 ring-1 ring-slate-700 transition-opacity group-hover:opacity-100',
          isLeft ? 'right-6' : 'left-6',
        ].join(' ')}
      >
        {data.label}
      </div>
    </div>
  )
}

export default memo(PortNode)
