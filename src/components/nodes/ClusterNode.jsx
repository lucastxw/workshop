import { memo } from 'react'
import { useStore } from '../../store'

/* Folder cluster — a translucent background rectangle that visually groups the
 * files belonging to the same folder. Purely decorative / spatial. */
function ClusterNode({ data }) {
  const toggleClusterVisibility = useStore((s) => s.toggleClusterVisibility)
  const folderId = data.folderId ?? data.id ?? data.name

  const handleHide = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (folderId) toggleClusterVisibility(folderId)
  }

  return (
    <div
      className="relative h-full w-full rounded-2xl border border-dashed border-slate-700/70 bg-subarea"
      style={{ width: data.width, height: data.height }}
    >
      <div className="flex items-center justify-between px-3 py-1.5 text-[11px] font-mono tracking-tight text-slate-500">
        <div>
          <span className="text-slate-600">📁</span> {data.name}
        </div>
        <button
          type="button"
          title="Hide folder rectangle"
          onPointerDown={handleHide}
          onClick={handleHide}
          className="pointer-events-auto rounded-full border border-slate-700/80 bg-slate-900/80 px-1.5 py-0.5 text-[10px] text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default memo(ClusterNode)
