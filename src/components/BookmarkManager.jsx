import { useStore } from '../store'
import { Header } from './FileExplorer'

/* Bookmark Manager (bottom-left). A list of saved viewport states.
 * Double-clicking a bookmark:
 *   1. snapshots the CURRENT view as a temporary "return point" bookmark,
 *   2. pans/zooms the map to the saved bookmark's coordinates,
 *   3. focuses the saved object. */
export default function BookmarkManager() {
  const bookmarks = useStore((s) => s.bookmarks)
  const functions = useStore((s) => s.functions)
  const removeBookmark = useStore((s) => s.removeBookmark)
  const setFocusedNode = useStore((s) => s.setFocusedNode)
  const requestFocus = useStore((s) => s.requestFocus)
  const pushTemporaryBookmark = useStore((s) => s.pushTemporaryBookmark)

  const applyBookmark = (bm) => {
    const api = useStore.getState().flowApi
    if (api) {
      // 1) save where we are right now as a temporary return point
      pushTemporaryBookmark(api.getViewport())
      // 2) fly to the bookmarked coordinates
      api.setViewport(bm.viewport, { duration: 650 })
    }
    // 3) focus the saved object
    if (bm.focusObjectId) {
      if (functions[bm.focusObjectId]) setFocusedNode(bm.focusObjectId)
      requestFocus(bm.focusObjectId)
    }
  }

  return (
    <div className="flex h-full flex-col bg-panel">
      <Header title="Bookmark Manager" badge={bookmarks.length} />
      <div className="px-3 py-1.5 text-[10px] text-slate-500">Double-click to fly to a saved view</div>
      <div className="thin-scroll flex-1 overflow-auto pb-2">
        {bookmarks.length === 0 && <div className="px-3 py-6 text-center text-xs text-slate-600">No bookmarks yet — use “★ Save view”.</div>}
        {bookmarks.map((bm) => (
          <div
            key={bm.id}
            onDoubleClick={() => applyBookmark(bm)}
            className={[
              'group mx-2 mb-1.5 cursor-pointer rounded-lg border px-3 py-2 transition-colors',
              bm.temporary ? 'border-dashed border-slate-700 bg-slate-800/30' : 'border-slate-700 bg-slate-800/60 hover:border-emerald-500/70 hover:bg-emerald-500/10',
            ].join(' ')}
          >
            <div className="flex items-center gap-2">
              <span className={bm.temporary ? 'text-slate-500' : 'text-emerald-500'}>{bm.temporary ? '↩' : '★'}</span>
              <span className="flex-1 truncate text-[13px] text-slate-200">{bm.name}</span>
              <button
                onClick={(e) => { e.stopPropagation(); removeBookmark(bm.id) }}
                className="text-slate-600 opacity-0 transition-opacity hover:text-rose-400 group-hover:opacity-100"
                title="Delete bookmark"
              >
                ✕
              </button>
            </div>
            <div className="mt-0.5 flex items-center gap-2 pl-6 text-[10px] text-slate-500">
              <span className="font-mono">z {bm.viewport.zoom.toFixed(2)}</span>
              {bm.focusObjectId && functions[bm.focusObjectId] && (
                <span className="truncate font-mono text-slate-400">→ {functions[bm.focusObjectId].name}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
