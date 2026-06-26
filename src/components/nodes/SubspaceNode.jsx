import { memo, useState } from 'react'
import { useStore } from '../../store'

const SWATCHES = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#ef4444']

/* Subspace — a translucent rectangle used to visually group objects. Has a
 * top-right toolbar: Description · Colour · Expand. */
function SubspaceNode({ id, data }) {
  const setSubspaceColor = useStore((s) => s.setSubspaceColor)
  const setSubspaceDescription = useStore((s) => s.setSubspaceDescription)
  const setExpandedSubspace = useStore((s) => s.setExpandedSubspace)

  const [showDesc, setShowDesc] = useState(false)
  const [showColors, setShowColors] = useState(false)

  return (
    <div
      className="relative h-full w-full rounded-2xl border-2 border-dashed"
      style={{
        width: data.width,
        height: data.height,
        borderColor: `${data.color}66`,
        background: `${data.color}10`,
        boxShadow: `inset 0 0 60px ${data.color}12`,
      }}
    >
      {/* label */}
      <div className="absolute left-3 top-2 select-none text-[11px] font-semibold uppercase tracking-wider" style={{ color: `${data.color}cc` }}>
        ◈ {data.name}
      </div>

      {/* toolbar */}
      <div className="absolute right-2 top-2 flex items-center gap-1 nodrag">
        <ToolBtn label="Description" onClick={() => { setShowDesc((v) => !v); setShowColors(false) }}>i</ToolBtn>
        <ToolBtn label="Colour" onClick={() => { setShowColors((v) => !v); setShowDesc(false) }}>
          <span className="h-3 w-3 rounded-full" style={{ background: data.color }} />
        </ToolBtn>
        <ToolBtn label="Expand" onClick={() => setExpandedSubspace(id)}>⛶</ToolBtn>
      </div>

      {/* description popover */}
      {showDesc && (
        <div className="absolute right-2 top-10 z-10 w-60 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag">
          <textarea
            autoFocus
            defaultValue={data.description}
            onBlur={(e) => setSubspaceDescription(id, e.target.value)}
            placeholder="Describe this subspace…"
            className="h-20 w-full resize-none rounded bg-slate-800 p-2 text-[11px] text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      )}

      {/* colour popover */}
      {showColors && (
        <div className="absolute right-2 top-10 z-10 flex gap-1.5 rounded-lg border border-slate-700 bg-slate-900 p-2 nodrag">
          {SWATCHES.map((c) => (
            <button
              key={c}
              onClick={() => { setSubspaceColor(id, c); setShowColors(false) }}
              className="h-5 w-5 rounded-full ring-2 ring-transparent hover:ring-white/60"
              style={{ background: c }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ToolBtn({ children, label, onClick }) {
  return (
    <button
      title={label}
      onClick={(e) => { e.stopPropagation(); onClick() }}
      className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white"
    >
      {children}
    </button>
  )
}

export default memo(SubspaceNode)
