import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
} from 'reactflow'
import 'reactflow/dist/style.css'

import { useStore, getFileSize, getFocusGraph, getProjectFocus, FN, FILE, PORT, FILE_COLORS } from '../store'
import SubspaceNode from './nodes/SubspaceNode'
import FileNode from './nodes/FileNode'
import FunctionNode from './nodes/FunctionNode'
import TunableNode from './nodes/TunableNode'
import PortNode from './nodes/PortNode'
import ClusterNode from './nodes/ClusterNode'
import ProjectFileNode from './nodes/ProjectFileNode'
import AroundEdge from './edges/AroundEdge'

const nodeTypes = {
  subspace: SubspaceNode,
  file: FileNode,
  function: FunctionNode,
  tunable: TunableNode,
  port: PortNode,
  cluster: ClusterNode,
  projectFile: ProjectFileNode,
}

const edgeTypes = { around: AroundEdge }

const DOWNSTREAM_COLOR = '#34d399' // selection AFFECTS these (arrow exits selection's right)
const UPSTREAM_COLOR = '#f59e0b' // these AFFECT the selection (arrow enters selection's left)

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

  // --- view mode ---
  const viewMode = useStore((s) => s.viewMode)
  const setViewMode = useStore((s) => s.setViewMode)

  // --- function-graph (mock) slices ---
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)
  const subspaces = useStore((s) => s.subspaces)
  const tunables = useStore((s) => s.tunables)
  const calls = useStore((s) => s.calls)
  const focusedNodeId = useStore((s) => s.focusedNodeId)

  // --- project-graph (real directory) slices ---
  const projectFiles = useStore((s) => s.projectFiles)
  const projectFolders = useStore((s) => s.projectFolders)
  const projectEdges = useStore((s) => s.projectEdges)
  const selectedProjectFileId = useStore((s) => s.selectedProjectFileId)
  const projectFolderFilter = useStore((s) => s.projectFolderFilter)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const clearProjectSelection = useStore((s) => s.clearProjectSelection)

  // --- shared actions ---
  const moveNode = useStore((s) => s.moveNode)
  const clearFocus = useStore((s) => s.clearFocus)
  const setFocusedNode = useStore((s) => s.setFocusedNode)
  const requestFocus = useStore((s) => s.requestFocus)
  const setFlowApi = useStore((s) => s.setFlowApi)
  const saveBookmark = useStore((s) => s.saveBookmark)
  const createSubspace = useStore((s) => s.createSubspace)
  const createFile = useStore((s) => s.createFile)
  const createFunction = useStore((s) => s.createFunction)
  const pendingFocus = useStore((s) => s.pendingFocus)
  const consumePendingFocus = useStore((s) => s.consumePendingFocus)

  const [menu, setMenu] = useState(null) // { x, y, flowPos }
  const [search, setSearch] = useState('')

  const isProject = viewMode === 'project'

  /* ---------- expose an imperative bridge for the sidebar (bookmarks) ---------- */
  useEffect(() => {
    setFlowApi({
      getViewport: () => rf.getViewport(),
      setViewport: (vp, opts) => rf.setViewport(vp, opts),
      fitTo: (id, opts) => rf.fitView({ nodes: [{ id }], ...opts }),
    })
  }, [rf, setFlowApi])

  /* ---------- reframe when the view mode changes ---------- */
  useEffect(() => {
    const t = setTimeout(() => rf.fitView({ duration: 500, padding: 0.18 }), 60)
    return () => clearTimeout(t)
  }, [viewMode, rf])

  /* ---------- global Escape handler to exit focus / selection ---------- */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return
      clearFocus()
      clearProjectSelection()
      setMenu(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [clearFocus, clearProjectSelection])

  /* ---------- imperative pan/zoom when something requests focus ---------- */
  useEffect(() => {
    if (!pendingFocus) return
    const id = pendingFocus.id
    const isSub = !!subspaces[id]
    const isFn = !!functions[id]
    // Centre a function by framing its parent file for context.
    const targetId = isFn ? functions[id].fileId : id
    rf.fitView({
      nodes: [{ id: targetId }],
      duration: 650,
      padding: isSub ? 0.06 : 0.4,
      maxZoom: isSub ? 1.6 : 1.5,
    })
    consumePendingFocus()
  }, [pendingFocus, rf, subspaces, functions, consumePendingFocus])

  /* ===========================================================================
   *  FUNCTION-GRAPH nodes/edges (mock spatial demo)
   * ======================================================================== */
  const functionNodes = useMemo(() => {
    const out = []
    const focus = getFocusGraph({ focusedNodeId, functions, calls })

    for (const sp of Object.values(subspaces)) {
      out.push({
        id: sp.id,
        type: 'subspace',
        position: sp.position,
        data: { ...sp, width: sp.size.width, height: sp.size.height },
        style: { width: sp.size.width, height: sp.size.height, zIndex: 0 },
        zIndex: 0,
      })
    }
    for (const file of Object.values(files)) {
      const size = getFileSize(functions, file.id)
      out.push({
        id: file.id,
        type: 'file',
        position: file.position,
        data: { ...file, width: size.width, height: size.height },
        style: { width: size.width, height: size.height },
        zIndex: 1,
      })
    }
    for (const fn of Object.values(functions)) {
      out.push({
        id: fn.id,
        type: 'function',
        position: fn.position,
        parentNode: fn.fileId,
        extent: 'parent',
        data: { name: fn.name, fileId: fn.fileId, width: FN.W, height: FN.H },
        zIndex: 2,
      })
    }
    if (focus) {
      const size = getFileSize(functions, focus.fileId)
      focus.leftPorts.forEach((p, i) => {
        const color = FILE_COLORS[p.extFileId] || '#94a3b8'
        out.push({
          id: `port-l-${p.extFnId}`,
          type: 'port',
          parentNode: focus.fileId,
          position: { x: -PORT.W / 2, y: FILE.HEADER + 8 + i * PORT.GAP_Y },
          data: { side: 'left', color, label: `${functions[p.extFnId].name} · ${files[p.extFileId].name}` },
          draggable: false,
          selectable: false,
          zIndex: 6,
        })
      })
      focus.rightPorts.forEach((p, i) => {
        const color = FILE_COLORS[p.extFileId] || '#94a3b8'
        out.push({
          id: `port-r-${p.extFnId}`,
          type: 'port',
          parentNode: focus.fileId,
          position: { x: size.width - PORT.W / 2, y: FILE.HEADER + 8 + i * PORT.GAP_Y },
          data: { side: 'right', color, label: `${functions[p.extFnId].name} · ${files[p.extFileId].name}` },
          draggable: false,
          selectable: false,
          zIndex: 6,
        })
      })
    }
    for (const t of Object.values(tunables)) {
      out.push({ id: t.id, type: 'tunable', position: t.position, data: t, zIndex: 1 })
    }
    return out
  }, [files, functions, subspaces, tunables, calls, focusedNodeId])

  const functionEdges = useMemo(() => {
    const focus = getFocusGraph({ focusedNodeId, functions, calls })
    if (!focus) return []
    const fid = focus.focusedNodeId
    const E = []
    focus.internalUpstream.forEach((cid, i) => E.push(makeEdge(cid, fid, '#818cf8', { lane: i, bow: 'up' })))
    focus.internalDownstream.forEach((cid, i) => E.push(makeEdge(fid, cid, '#818cf8', { lane: i, bow: 'down' })))
    focus.leftPorts.forEach((p, i) => E.push(makeEdge(`port-l-${p.extFnId}`, fid, FILE_COLORS[p.extFileId] || '#94a3b8', { lane: i, bow: 'up' })))
    focus.rightPorts.forEach((p, i) => E.push(makeEdge(fid, `port-r-${p.extFnId}`, FILE_COLORS[p.extFileId] || '#94a3b8', { lane: i, bow: 'down' })))
    return E
  }, [focusedNodeId, functions, calls])

  /* ===========================================================================
   *  PROJECT-GRAPH nodes/edges (real directory)
   * ======================================================================== */
  const projectNodes = useMemo(() => {
    const out = []
    // folder clusters (background)
    for (const fld of Object.values(projectFolders)) {
      if (projectFolderFilter && fld.id !== projectFolderFilter) continue
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
    // files
    for (const f of Object.values(projectFiles)) {
      if (projectFolderFilter && f.folder !== projectFolderFilter) continue
      out.push({ id: f.id, type: 'projectFile', position: f.position, data: f, zIndex: 2 })
    }
    return out
  }, [projectFiles, projectFolders, projectFolderFilter])

  const projectFlowEdges = useMemo(() => {
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

  const nodes = isProject ? projectNodes : functionNodes
  const edges = isProject ? projectFlowEdges : functionEdges

  /* ---------- drag → persist positions back to the store ---------- */
  const onNodesChange = useCallback(
    (changes) => {
      for (const ch of changes) {
        if (ch.type === 'position' && ch.position) moveNode(ch.id, ch.position)
      }
    },
    [moveNode],
  )

  const onPaneClick = useCallback(() => {
    clearFocus()
    clearProjectSelection()
    setMenu(null)
  }, [clearFocus, clearProjectSelection])

  /* ---------- context menu (creation — function mode only) ---------- */
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

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return []
    const res = []
    if (isProject) {
      for (const f of Object.values(projectFiles)) {
        if (projectFolderFilter && f.folder !== projectFolderFilter) continue
        if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'file' })
      }
    } else {
      for (const f of Object.values(functions)) if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'fn' })
      for (const f of Object.values(files)) if (f.name.toLowerCase().includes(q)) res.push({ id: f.id, label: f.name, kind: 'file' })
      for (const s of Object.values(subspaces)) if (s.name.toLowerCase().includes(q)) res.push({ id: s.id, label: s.name, kind: 'sub' })
    }
    return res.slice(0, 6)
  }, [search, isProject, projectFiles, functions, files, subspaces])

  const gotoResult = (r) => {
    if (isProject) selectProjectFile(r.id)
    else if (r.kind === 'fn') setFocusedNode(r.id)
    requestFocus(r.id)
    setSearch('')
  }

  return (
    <div ref={wrapperRef} className="relative h-full w-full" onClick={() => setMenu(null)}>
      {/* ---------- MODE TOGGLE (top-left) ---------- */}
      <div className="pointer-events-none absolute left-3 top-3 z-20">
        <div className="pointer-events-auto inline-flex rounded-full border border-slate-700 bg-slate-900/90 p-0.5 text-xs shadow-lg backdrop-blur">
          <ToggleBtn active={isProject} onClick={() => setViewMode('project')}>📁 Project Map</ToggleBtn>
          <ToggleBtn active={!isProject} onClick={() => setViewMode('functions')}>◯ Functions</ToggleBtn>
        </div>
      </div>

      {/* ---------- TOP OVERLAY: search + save view ---------- */}
      <div className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchResults[0] && gotoResult(searchResults[0])}
              placeholder={isProject ? 'Search files…' : 'Search files & functions…'}
              className="w-80 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 shadow-lg outline-none backdrop-blur placeholder:text-slate-500 focus:border-indigo-500"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">⌕</span>
            {searchResults.length > 0 && (
              <div className="absolute mt-2 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur">
                {searchResults.map((r) => (
                  <button
                    key={`${r.kind}-${r.id}`}
                    onClick={() => gotoResult(r)}
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 hover:bg-slate-800"
                  >
                    <span className="text-[10px] uppercase text-slate-500">{r.kind}</span>
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
        onPaneContextMenu={onPaneContextMenu}
        minZoom={0.1}
        maxZoom={3}
        fitView
        proOptions={{ hideAttribution: true }}
        className="bg-canvas"
      >
        <Background variant={BackgroundVariant.Dots} gap={26} size={1.5} color="#1e2533" />
        <Controls position="top-right" className="!bg-slate-900 !border-slate-700" showInteractive={false} />
        <MiniMap
          pannable
          zoomable
          maskColor="rgba(2,6,23,0.7)"
          className="!bg-slate-900 !border !border-slate-700"
          nodeColor={(n) =>
            n.type === 'subspace'
              ? `${n.data?.color || '#6366f1'}55`
              : n.type === 'cluster'
              ? '#1e293b'
              : n.type === 'projectFile'
              ? '#475569'
              : n.type === 'function'
              ? '#475569'
              : n.type === 'tunable'
              ? '#06b6d4'
              : '#334155'
          }
        />
      </ReactFlow>

      {/* ---------- PROJECT-MODE LEGEND ---------- */}
      {isProject && (
        <div className="pointer-events-none absolute bottom-6 left-6 z-20 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-[11px] shadow-lg backdrop-blur">
          <div className="mb-1 font-semibold text-slate-300">Click to trace · double-click to open</div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block h-0.5 w-5" style={{ background: DOWNSTREAM_COLOR }} /> affects (imports) →
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="inline-block h-0.5 w-5" style={{ background: UPSTREAM_COLOR }} /> ← affected by (imported by)
          </div>
          <div className="mt-1 text-slate-500">🖼 image · 🔊 audio · ▢ text → editor/viewer</div>
        </div>
      )}

      {/* ---------- FAB (creation — function mode only) ---------- */}
      {!isProject && (
        <button
          onClick={openMenuAtCenter}
          title="Create…"
          className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl shadow-indigo-900/50 transition hover:bg-indigo-500 active:scale-95"
        >
          +
        </button>
      )}

      {/* ---------- CONTEXT MENU ---------- */}
      {menu && (
        <CanvasMenu
          x={menu.x}
          y={menu.y}
          files={Object.values(files)}
          onClose={() => setMenu(null)}
          onCreateSubspace={() => { createSubspace(menu.flowPos); setMenu(null) }}
          onCreateFile={() => {
            const folder = window.prompt('Folder path for the new file', 'src/feature')
            if (folder === null) return
            createFile(menu.flowPos, folder)
            setMenu(null)
          }}
          onCreateFunction={(fileId) => {
            const name = window.prompt('Function name', 'newFn()')
            if (name === null) return
            createFunction(fileId, name)
            setMenu(null)
          }}
        />
      )}
    </div>
  )
}

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded-full px-3 py-1.5 font-medium transition-colors',
        active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

/* ---------- creation context menu ---------- */
function CanvasMenu({ x, y, files, onCreateSubspace, onCreateFile, onCreateFunction, onClose }) {
  const [fnSub, setFnSub] = useState(false)
  return (
    <div
      className="absolute z-30 w-56 overflow-hidden rounded-xl border border-slate-700 bg-slate-900/95 py-1 text-sm shadow-2xl backdrop-blur"
      style={{ left: x, top: y }}
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500">Create</div>
      <MenuItem icon="◈" onClick={onCreateSubspace}>New Subspace</MenuItem>
      <MenuItem icon="▢" onClick={onCreateFile}>New File…</MenuItem>
      <div className="relative">
        <MenuItem icon="◯" chevron onClick={() => setFnSub((v) => !v)}>
          New Function
        </MenuItem>
        {fnSub && (
          <div className="border-t border-slate-800 bg-slate-950/60">
            {files.length === 0 && <div className="px-6 py-2 text-xs text-slate-500">No files yet</div>}
            {files.map((f) => (
              <button
                key={f.id}
                onClick={() => onCreateFunction(f.id)}
                className="block w-full px-6 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800"
              >
                in <span className="font-mono text-slate-100">{f.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="my-1 border-t border-slate-800" />
      <MenuItem icon="✕" onClick={onClose}>Close</MenuItem>
    </div>
  )
}

function MenuItem({ icon, children, onClick, chevron }) {
  return (
    <button onClick={onClick} className="flex w-full items-center gap-3 px-3 py-1.5 text-left text-slate-200 hover:bg-slate-800">
      <span className="w-4 text-center text-slate-400">{icon}</span>
      <span className="flex-1">{children}</span>
      {chevron && <span className="text-slate-500">▾</span>}
    </button>
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
