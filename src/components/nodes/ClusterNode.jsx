import { memo } from 'react'

/* Folder cluster — a translucent background rectangle that visually groups the
 * files belonging to the same folder. Purely decorative / spatial. */
function ClusterNode({ data }) {
  return (
    <div
      className="h-full w-full rounded-2xl border border-dashed border-slate-700/70 bg-subarea"
      style={{ width: data.width, height: data.height }}
    >
      <div className="px-3 py-1.5 text-[11px] font-mono tracking-tight text-slate-500">
        <span className="text-slate-600">📁</span> {data.name}
      </div>
    </div>
  )
}

export default memo(ClusterNode)
