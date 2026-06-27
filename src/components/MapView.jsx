import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  MarkerType,
  ReactFlowProvider,
  SelectionMode,
  useReactFlow,
} from 'reactflow'
import 'reactflow/dist/style.css'

import { useStore, getProjectFocus, getFileContent } from '../store'
import { parseFunctions } from '../projectGraph'
import ClusterNode from './nodes/ClusterNode'
import ProjectFileNode from './nodes/ProjectFileNode'
import ProjectFunctionNode from './nodes/ProjectFunctionNode'
import AroundEdge from './edges/AroundEdge'

const nodeTypes = {
  cluster: ClusterNode,
  projectFile: ProjectFileNode,
  projectFunction: ProjectFunctionNode,
}

const edgeTypes = { around: AroundEdge }

const DOWNSTREAM_COLOR = '#34d399' // selection AFFECTS these (arrow exits selection's right)
const UPSTREAM_COLOR = '#f59e0b' // these AFFECT the selection (arrow enters selection's left)

const FILE_W = 178
const FILE_H = 64
const FN_PILL_H = 28

/* ---------- helpers ---------- */
function makeEdge(source, target, color, opts = {}) {
  return {
    id: `e-${source}-${target}`,
    source,
    target,
    type: 'around', // route around node bodies (see AroundEdge)
    animated: true,
    className: 'focus-edge',
    style: { stroke: color, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color, width: 16, height: 16 },
    data: { lane: opts.lane ?? 0, bow: opts.bow ?? 'down' },
  }
}

/* =============================================================================
 *  FLOW  (inner component — has access to the ReactFlow instance)
 * ========================================================================== */
function Flow() {
  const rf = useReactFlow()
  const wrapperRef = useRef(null)

  // --- project graph (real directory) ---
  const projectFiles = useStore((s) => s.projectFiles)
  const projectFolders = useStore((s) => s.projectFolders)
  const projectEdges = useStore((s) => s.projectEdges)
  const selectedProjectFileId = useStore((s) => s.selectedProjectFileId)
  const selectedFileIds = useStore((s) => s.selectedFileIds)
  const projectFolderFilter = useStore((s) => s.projectFolderFilter)
  const fileEdits = useStore((s) => s.fileEdits)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const clearProjectSelection = useStore((s) => s.clearProjectSelection)

  // --- shared actions ---
  const moveNode = useStore((s) => s.moveNode)
  const requestFocus = useStore((s) => s.requestFocus)
  const setFlowApi = useStore((s) => s.setFlowApi)
  const saveBookmark = useStore((s) => s.saveBookmark)
  const pendingFocus = useStore((s) => s.pendingFocus)
  const consumePendingFocus = useStore((s) => s.consumePendingFocus)

  const [search, setSearch] = useState('')

  /* ---------- expose an imperative bridge for the sidebar (bookmarks) ---------- */
  useEffect(() => {
    setFlowApi({
      getViewport: () => rf.getViewport(),
      setViewport: (vp, opts) => rf.setViewport(vp, opts),
      fitTo: (id, opts) => rf.fitView({ nodes: [{ id }], ...opts }),
    })
  }, [rf, setFlowApi])

  /* ---------- Escape clears the selection ---------- */
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && clearProjectSelection()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [clearProjectSelection])

  /* ---------- redirect the map to a file (explorer / search) ---------- */
  useEffect(() => {
    if (!pendingFocus) return
    const f = useStore.getState().projectFiles[pendingFocus.id]
    if (f) rf.setCenter(f.position.x + FILE_W / 2, f.position.y + FILE_H / 2, { zoom: 1.2, duration: 650 })
    consumePendingFocus()
  }, [pendingFocus, rf, consumePendingFocus])

  /* ===========================================================================
   *  NODES: folder clusters + files + (for the active file) function pills
   * ======================================================================== */
  const nodes = useMemo(() => {
    const out = []
    const inFilter = (folder) => !projectFolderFilter || folder === projectFolderFilter

    // 1) folder clusters (background)
    for (const fld of Object.values(projectFolders)) {
      if (!inFilter(fld.id)) continue
      out.push({
        id: `${fld.id}::cluster`,
        type: 'cluster',
        position: fld.position,
        data: { name: fld.name, width: fld.size.width, height: fld.size.height },
        style: { width: fld.size.width, height: fld.size.height, zIndex: 0 },
        zIndex: 0,
        selectable: false,
        draggable: false,
      })
    }

    // 2) files — `selected` is controlled from the store so React Flow can
    //    group-drag multi-selected files together
    for (const f of Object.values(projectFiles)) {
      if (!inFilter(f.folder)) continue
      out.push({
        id: f.id,
        type: 'projectFile',
        position: f.position,
        data: f,
        selected: selectedFileIds.includes(f.id),
        style: { width: FILE_W, height: FILE_H },
        zIndex: 2,
      })
    }

    // 3) functions of the single active text file → pills beside the file.
    //    Top-level (not children) with a high z-index so they always render
    //    above neighbouring file nodes and stay clickable.
    const active = selectedProjectFileId && projectFiles[selectedProjectFileId]
    if (active && active.kind === 'text' && inFilter(active.folder)) {
      const content = getFileContent(useStore.getState(), active.path)
      const fns = parseFunctions(content)
      const totalH = fns.length * FN_PILL_H
      const startY = Math.max(0, (FILE_H - totalH) / 2)
      fns.forEach((fn, i) => {
        out.push({
          id: `pf::${active.id}::${fn.name}::${fn.line}`,
          type: 'projectFunction',
          position: { x: active.position.x + FILE_W + 26, y: active.position.y + startY + i * FN_PILL_H },
          data: { name: fn.name, line: fn.line, endLine: fn.endLine, path: active.path, fileId: active.id },
          selectable: false,
          draggable: false,
          zIndex: 1000,
        })
      })
    }

    return out
  }, [projectFiles, projectFolders, projectFolderFilter, selectedProjectFileId, selectedFileIds, fileEdits])

  const edges = useMemo(() => {
    const visibleIds = new Set(
      Object.values(projectFiles)
        .filter((f) => !projectFolderFilter || f.folder === projectFolderFilter)
        .map((f) => f.id),
    )
    if (projectFolderFilter && !visibleIds.has(selectedProjectFileId)) return []
    const focus = getProjectFocus({ selectedProjectFileId, projectEdges })
    if (!focus) return []
    const E = []
    focus.downstream
      .filter((t) => visibleIds.has(t))
      .forEach((t, i) => E.push(makeEdge(focus.id, t, DOWNSTREAM_COLOR, { lane: i, bow: 'down' })))
    focus.upstream
      .filter((srcId) => visibleIds.has(srcId))
      .forEach((srcId, i) => E.push(makeEdge(srcId, focus.id, UPSTREAM_COLOR, { lane: i, bow: 'up' })))
    return E
  }, [selectedProjectFileId, projectEdges, projectFiles, projectFolderFilter])

  /* ---------- node changes: apply selection AND drag-position to the store ---------- */
  const onNodesChange = useCallback(
    (changes) => {
      const selChanges = changes.filter((c) => c.type === 'select')
      if (selChanges.length) {
        const st = useStore.getState()
        const next = new Set(st.selectedFileIds)
        for (const c of selChanges) {
          if (!st.projectFiles[c.id]) continue // ignore non-file nodes
          if (c.selected) next.add(c.id)
          else next.delete(c.id)
        }
        st.setSelection(Array.from(next))
      }
      for (const ch of changes) {
        if (ch.type === 'position' && ch.position) moveNode(ch.id, ch.position)
      }
    },
    [moveNode],
  )

  const onPaneClick = useCallback(() => clearProjectSelection(), [clearProjectSelection])

  /* ---------- top overlay actions ---------- */
  const handleSaveView = () => {
    const name = window.prompt('Name this bookmark', `View ${Date.now() % 1000}`)
    if (name === null) return
    saveBookmark(rf.getViewport(), name)
  }

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return []
    const res = []
    for (const f of Object.values(projectFiles)) {
      if (projectFolderFilter && f.folder !== projectFolderFilter) continue
      if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name })
    }
    return res.slice(0, 6)
  }, [search, projectFiles, projectFolderFilter])

  const gotoResult = (r) => {
    selectProjectFile(r.id)
    requestFocus(r.id)
    setSearch('')
  }

  return (
    <div ref={wrapperRef} className="relative h-full w-full">
      {/* ---------- TOP OVERLAY: search + save view ---------- */}
      <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchResults[0] && gotoResult(searchResults[0])}
              placeholder="Search files…"
              className="w-80 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 shadow-lg outline-none backdrop-blur placeholder:text-slate-500 focus:border-indigo-500"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">⌕</span>
            {searchResults.length > 0 && (
              <div className="absolute mt-2 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur">
                {searchResults.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => gotoResult(r)}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-800"
                  >
                    <span className="truncate font-mono">{r.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={handleSaveView}
            className="flex items-center gap-1.5 rounded-full border border-indigo-500/60 bg-indigo-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-500"
          >
            <span>★</span> Save view
          </button>
        </div>
      </div>

      {/* ---------- THE CANVAS ---------- */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onPaneClick={onPaneClick}
        minZoom={0.1}
        maxZoom={3}
        fitView
        proOptions={{ hideAttribution: true }}
        className="bg-canvas"
        // ----- selection: left-drag = marquee, Ctrl/⌘+click = add, pan with middle/right mouse -----
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        panOnDrag={[1, 2]}
        multiSelectionKeyCode={['Meta', 'Control']}
      >
        <Background variant={BackgroundVariant.Dots} gap={26} size={1.5} color="#1e2533" />
        <Controls position="top-right" className="!bg-slate-900 !border-slate-700" showInteractive={false} />
        <MiniMap
          pannable
          zoomable
          maskColor="rgba(2,6,23,0.7)"
          className="!bg-slate-900 !border !border-slate-700"
          nodeColor={(n) => (n.type === 'cluster' ? '#1e293b' : n.type === 'projectFunction' ? '#6366f1' : '#475569')}
        />
      </ReactFlow>

      {/* ---------- LEGEND ---------- */}
      <div className="pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur">
        <div className="mb-1 font-semibold text-slate-300">Click a file → trace deps · its ƒ functions · open IDE</div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-block h-0.5 w-5" style={{ background: DOWNSTREAM_COLOR }} /> affects (imports) →
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-block h-0.5 w-5" style={{ background: UPSTREAM_COLOR }} /> ← affected by (imported by)
        </div>
        <div className="mt-1 text-slate-500">drag = select box · Ctrl/⌘+click = multi · drag a selected file = move the group · right/middle-drag = pan</div>
      </div>
    </div>
  )
}

/* =============================================================================
 *  PUBLIC WRAPPER
 * ========================================================================== */
export default function MapView() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  )
}
