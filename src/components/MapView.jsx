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
import SubspaceNode from './nodes/SubspaceNode'
import TunableNode from './nodes/TunableNode'
import AroundEdge from './edges/AroundEdge'

const nodeTypes = {
  cluster: ClusterNode,
  projectFile: ProjectFileNode,
  projectFunction: ProjectFunctionNode,
  subspace: SubspaceNode,
  tunable: TunableNode,
}

const edgeTypes = { around: AroundEdge }

const DOWNSTREAM_COLOR = '#3c5a40' // selection AFFECTS these — forest green (arrow exits right)
const UPSTREAM_COLOR = '#a8663f' // these AFFECT the selection — terracotta (arrow enters left)

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
    zIndex: 5, // tucked BEHIND the file/tuner cards (z 10/12) so the line never paints over a file face — it only shows in the open gaps and re-emerges at each card's edge. Still above the folder (0) / subspace (1) backdrops, and below the ƒ pills (1000).
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
  const subspaces = useStore((s) => s.subspaces)
  const tunables = useStore((s) => s.tunables)
  const expandedSubspaceId = useStore((s) => s.expandedSubspaceId)
  const hiddenClusterIds = useStore((s) => s.hiddenClusterIds)
  const selectedTunableVariable = useStore((s) => s.selectedTunableVariable)
  const setSelectedTunableVariable = useStore((s) => s.setSelectedTunableVariable)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const clearProjectSelection = useStore((s) => s.clearProjectSelection)

  // --- shared actions ---
  const moveNode = useStore((s) => s.moveNode)
  const requestFocus = useStore((s) => s.requestFocus)
  const clearFocus = useStore((s) => s.clearFocus)
  const setFlowApi = useStore((s) => s.setFlowApi)
  const saveBookmark = useStore((s) => s.saveBookmark)
  const createSubspace = useStore((s) => s.createSubspace)
  const createTunerFromFile = useStore((s) => s.createTunerFromFile)
  const clearExpandedSubspace = useStore((s) => s.clearExpandedSubspace)
  const pendingFocus = useStore((s) => s.pendingFocus)
  const consumePendingFocus = useStore((s) => s.consumePendingFocus)
  const persistProjectFilePosition = useStore((s) => s.persistProjectFilePosition)
  const viewMode = useStore((s) => s.viewMode)
  const isProject = viewMode === 'project'

  const [search, setSearch] = useState('')
  const [menu, setMenu] = useState(null)

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
      if (!inFilter(fld.id) || hiddenClusterIds.includes(fld.id)) continue
      out.push({
        id: `${fld.id}::cluster`,
        type: 'cluster',
        position: fld.position,
        data: { name: fld.name, width: fld.size.width, height: fld.size.height, folderId: fld.id, id: fld.id },
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
        zIndex: 10, // above the dependency arrows (z 5) so the line tucks behind each card
      })
    }

    // 3) subspaces (purely visual grouping regions)
    for (const subspace of Object.values(subspaces)) {
      out.push({
        id: subspace.id,
        type: 'subspace',
        position: subspace.position,
        data: {
          ...subspace,
          width: subspace.size?.width ?? 360,
          height: subspace.size?.height ?? 280,
        },
        style: { width: subspace.size?.width ?? 360, height: subspace.size?.height ?? 280, zIndex: 1 },
        zIndex: 1,
        selectable: true,
      })
    }

    // 4) tuner objects
    for (const tuner of Object.values(tunables)) {
      out.push({
        id: tuner.id,
        type: 'tunable',
        position: tuner.position,
        data: { ...tuner },
        style: { width: tuner.width ?? 260, height: tuner.height ?? 180, zIndex: 12 },
        zIndex: 12, // above files (10) and the arrows beneath them
        selectable: true,
      })
    }

    // 5) functions of the single active text file → pills beside the file.
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
  }, [projectFiles, projectFolders, projectFolderFilter, selectedProjectFileId, selectedFileIds, fileEdits, subspaces, tunables, hiddenClusterIds])

  const edges = useMemo(() => {
    const visibleIds = new Set(
      Object.values(projectFiles)
        .filter((f) => !projectFolderFilter || f.folder === projectFolderFilter)
        .map((f) => f.id),
    )
    const selectedIds = selectedFileIds.length > 0 ? selectedFileIds : selectedProjectFileId ? [selectedProjectFileId] : []
    if (projectFolderFilter && selectedIds.every((id) => !visibleIds.has(id))) return []
    const edgeIds = new Set()
    const E = []
    // Lanes are counted per direction so each fan (down/up) spreads from 0 and
    // stays symmetric instead of sharing one ever-growing offset.
    let downLane = 0
    let upLane = 0
    for (const id of selectedIds) {
      if (!visibleIds.has(id)) continue
      for (const e of projectEdges) {
        if (e.source === id && visibleIds.has(e.target)) {
          const key = `${e.source}-${e.target}`
          if (!edgeIds.has(key)) {
            edgeIds.add(key)
            E.push(makeEdge(e.source, e.target, DOWNSTREAM_COLOR, { lane: downLane++, bow: 'down' }))
          }
        }
        if (e.target === id && visibleIds.has(e.source)) {
          const key = `${e.source}-${e.target}`
          if (!edgeIds.has(key)) {
            edgeIds.add(key)
            E.push(makeEdge(e.source, e.target, UPSTREAM_COLOR, { lane: upLane++, bow: 'up' }))
          }
        }
      }
    }
    if (selectedTunableVariable?.tunerId && selectedTunableVariable?.variableId) {
      const tuner = tunables[selectedTunableVariable.tunerId]
      const variable = tuner?.variables?.find((entry) => entry.id === selectedTunableVariable.variableId)
      if (tuner && variable?.originFunctionNodeId) {
        const key = `${tuner.id}-${variable.originFunctionNodeId}`
        if (!edgeIds.has(key)) {
          edgeIds.add(key)
          E.push({
            id: key,
            source: tuner.id,
            target: variable.originFunctionNodeId,
            animated: true,
            zIndex: 5,
            style: { stroke: '#f59e0b', strokeWidth: 2.25 },
            markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b', width: 14, height: 14 },
            className: 'focus-edge',
          })
        }
      }
    }

    return E
  }, [selectedProjectFileId, selectedFileIds, projectEdges, projectFiles, projectFolderFilter, selectedTunableVariable, tunables])

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

  const onNodeDragStop = useCallback(
    (event, node) => {
      if (isProject && node.type === 'projectFile') {
        persistProjectFilePosition(node.id, node.position)
      }
    },
    [isProject, persistProjectFilePosition],
  )

  const onPaneClick = useCallback(() => {
    clearFocus()
    clearProjectSelection()
    setSelectedTunableVariable(null, null)
    setMenu(null)
  }, [clearFocus, clearProjectSelection, setSelectedTunableVariable])

  /* ---------- context menu (creation — function mode only) */
  const onPaneContextMenu = useCallback(
    (e) => {
      e.preventDefault()
      if (isProject) return
      const bounds = wrapperRef.current.getBoundingClientRect()
      const flowPos = rf.screenToFlowPosition({ x: e.clientX, y: e.clientY })
      setMenu({ x: e.clientX - bounds.left, y: e.clientY - bounds.top, flowPos })
    },
    [rf, isProject],
  )

  const openMenuAtCenter = useCallback(() => {
    const bounds = wrapperRef.current.getBoundingClientRect()
    const cx = bounds.width - 240
    const cy = bounds.height - 220
    const flowPos = rf.screenToFlowPosition({ x: bounds.left + cx, y: bounds.top + cy })
    setMenu({ x: cx, y: cy, flowPos })
  }, [rf])

  /* ---------- top overlay actions ---------- */
  const handleSaveView = () => {
    const name = window.prompt('Name this bookmark', `View ${Date.now() % 1000}`)
    if (name === null) return
    saveBookmark(rf.getViewport(), name)
  }

  const handleCreateSubspace = () => {
    const bounds = wrapperRef.current?.getBoundingClientRect()
    if (!bounds) return
    const flowPos = rf.screenToFlowPosition({ x: bounds.width / 2, y: bounds.height / 2 })
    createSubspace(flowPos)
  }

  const handleConnect = () => {
    const selectedId = selectedProjectFileId || (selectedFileIds[0] ?? null)
    if (!selectedId) return
    const bounds = wrapperRef.current?.getBoundingClientRect()
    if (!bounds) return
    const flowPos = rf.screenToFlowPosition({ x: bounds.width / 2 + 140, y: bounds.height / 2 - 140 })
    createTunerFromFile(selectedId, flowPos)
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
            onClick={handleCreateSubspace}
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/60 bg-emerald-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-emerald-500"
          >
            <span>⊞</span> Create subspace
          </button>
          <button
            onClick={handleConnect}
            className="flex items-center gap-1.5 rounded-full border border-cyan-500/60 bg-cyan-600/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-cyan-500"
          >
            <span>⤓</span> Connect
          </button>
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
        onNodeDragStop={onNodeDragStop}
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
        <Background variant={BackgroundVariant.Dots} gap={26} size={1.5} color="#a99d7c" />
        <Controls position="top-right" className="!bg-paper !border-slate-700 !text-slate-300" showInteractive={false} />
        <MiniMap
          pannable
          zoomable
          maskColor="rgba(120,108,80,0.25)"
          className="!bg-panel !border !border-slate-700"
          nodeColor={(n) => (n.type === 'cluster' ? '#dbc19e' : n.type === 'projectFunction' ? '#985634' : '#cdb891')}
        />
      </ReactFlow>

      {expandedSubspaceId && subspaces[expandedSubspaceId] && (
        <div className="pointer-events-auto absolute right-0 top-0 z-30 h-full w-[320px] border-l border-slate-700 bg-slate-950/95 p-4 shadow-2xl backdrop-blur transition-transform">
          <div className="mb-4 flex items-start justify-between gap-2">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Subspace</div>
              <div className="text-lg font-semibold text-white">{subspaces[expandedSubspaceId].name}</div>
            </div>
            <button onClick={clearExpandedSubspace} className="rounded-full border border-slate-700 p-1.5 text-slate-300 hover:bg-slate-800 hover:text-white">
              ✕
            </button>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Description</div>
            <div className="text-sm leading-6 text-slate-300">{subspaces[expandedSubspaceId].description || 'Use the subspace toolbar to add context for this group.'}</div>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Colour</div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="h-3 w-3 rounded-full" style={{ background: subspaces[expandedSubspaceId].color }} />
              {subspaces[expandedSubspaceId].color}
            </div>
          </div>
        </div>
      )}

      {/* ---------- LEGEND ---------- */}
      <div className="pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur">
        <div className="mb-1.5 font-semibold text-slate-300">Click a file to see how it connects</div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-block h-0.5 w-5" style={{ background: DOWNSTREAM_COLOR }} /> → files it uses
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-block h-0.5 w-5" style={{ background: UPSTREAM_COLOR }} /> ← files that use it
        </div>
        <div className="mt-1.5 text-slate-500">Double-click to open · scroll to zoom · right-drag to move around</div>
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
