import { useEffect } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { useStore } from '../store'
import FileExplorer from './FileExplorer'
import BookmarkManager from './BookmarkManager'
import MapView from './MapView'
import TerminalModal from './TerminalModal'
import FloatingEditor from './FloatingEditor'

/* Top-level layout:
 *   ┌───────────────┬──────────────────────────────┐
 *   │ File Explorer │                              │
 *   ├───────────────┤        Map View (70%)        │
 *   │   Bookmarks   │                              │
 *   └───────────────┴──────────────────────────────┘
 *  Left column = 30% (vertically split 50/50), right column = 70%.
 */
export default function Layout() {
  const fetchSupabaseFiles = useStore((s) => s.fetchSupabaseFiles)

  useEffect(() => {
    fetchSupabaseFiles()
  }, [fetchSupabaseFiles])

  return (
    <div className="h-screen w-screen overflow-hidden bg-canvas text-slate-200">
      <PanelGroup direction="horizontal">
        {/* LEFT COLUMN (30%) */}
        <Panel defaultSize={30} minSize={18} className="border-r border-slate-800">
          <PanelGroup direction="vertical">
            <Panel defaultSize={50} minSize={15}>
              <FileExplorer />
            </Panel>
            <PanelResizeHandle className="group relative h-[3px] bg-slate-800 transition-colors hover:bg-indigo-500">
              <div className="absolute inset-x-0 -top-1 -bottom-1" />
            </PanelResizeHandle>
            <Panel defaultSize={50} minSize={15}>
              <BookmarkManager />
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="relative w-[3px] bg-slate-800 transition-colors hover:bg-indigo-500">
          <div className="absolute inset-y-0 -left-1 -right-1" />
        </PanelResizeHandle>

        {/* RIGHT COLUMN (70%) — the infinite map */}
        <Panel defaultSize={70} minSize={40}>
          <MapView />
        </Panel>
      </PanelGroup>

      <TerminalModal />
      <FloatingEditor />
    </div>
  )
}
