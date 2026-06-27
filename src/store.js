import { create } from 'zustand'
import { buildProjectGraph, FILE_SOURCE, kindOf, dirname, parseImports, resolveImport } from './projectGraph'
import { supabase } from './lib/supabase'

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

function nearestSquareSide(count) {
  if (count <= 1) return 1
  const root = Math.sqrt(count)
  const floorSide = Math.floor(root)
  const ceilSide = Math.ceil(root)
  const lowerDelta = count - floorSide * floorSide
  const upperDelta = ceilSide * ceilSide - count
  return lowerDelta <= upperDelta ? floorSide : ceilSide
}

function findAvailableProjectPosition(occupiedRects, startX = 920, startY = 120) {
  const GRID_W = 220
  const GRID_H = 120
  const NODE_W = 178
  const NODE_H = 64

  const usedRight = occupiedRects.reduce((max, rect) => Math.max(max, rect.x + rect.w), 0)
  const dedicatedStartX = Math.max(startX, usedRight + 260)

  // Use a simple grid scan to find the first non-overlapping slot in an import cluster region.
  for (let row = 0; row < 12; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const candidate = { x: dedicatedStartX + col * GRID_W, y: startY + row * GRID_H, w: NODE_W, h: NODE_H }
      const collides = occupiedRects.some((rect) => rectsOverlap(rect, candidate))
      if (!collides) return { x: candidate.x, y: candidate.y }
    }
  }

  return { x: dedicatedStartX, y: startY }
}

function findAvailableProjectGridStart(occupiedRects, itemCount, startX = 920, startY = 120) {
  const GRID_W = 220
  const GRID_H = 120
  const side = nearestSquareSide(itemCount)
  const rows = Math.ceil(itemCount / side)
  const width = side * GRID_W
  const height = rows * GRID_H

  const usedRight = occupiedRects.reduce((max, rect) => Math.max(max, rect.x + rect.w), 0)
  const dedicatedStartX = Math.max(startX, usedRight + 260)

  for (let row = 0; row < 12; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const candidate = { x: dedicatedStartX + col * GRID_W, y: startY + row * GRID_H, w: width, h: height }
      const collides = occupiedRects.some((rect) => rectsOverlap(rect, candidate))
      if (!collides) return { x: candidate.x, y: candidate.y, side }
    }
  }

  return { x: dedicatedStartX, y: startY, side }
}

/* =============================================================================
 *  GEOMETRY CONSTANTS
 *  Functions are children of File nodes; their `position` is relative to the
 *  parent File's top-left. The File node dynamically resizes to enclose its
 *  children (+ a buffer), see `getFileSize` below.
 * ========================================================================== */
export const FN = { W: 168, H: 38, GAP_Y: 14 }
export const FILE = {
  HEADER: 34, // reserved space for the file title bar
  PAD: 18, // inner padding / resize buffer around the function cluster
  MIN_W: 220,
  MIN_H: 110,
}
export const PORT = { W: 16, H: 16, GAP_Y: 26 }

/* A small deterministic palette used to colour external "port" nodes by the
 * file they originate from / point to. */
export const FILE_COLORS = {
  'file-auth': '#22d3ee', // cyan
  'file-api': '#a78bfa', // violet
  'file-db': '#f472b6', // pink
  'file-ui': '#34d399', // emerald
}

/* =============================================================================
 *  MOCK STATE  (no backend — this hardcoded graph drives every interaction)
 * ========================================================================== */
const initialFiles = {
  'file-auth': { id: 'file-auth', name: 'auth.service.ts', folderPath: 'src/core/auth', position: { x: 80, y: 80 } },
  'file-api': { id: 'file-api', name: 'api.client.ts', folderPath: 'src/core/net', position: { x: 620, y: 60 } },
  'file-db': { id: 'file-db', name: 'db.repository.ts', folderPath: 'src/core/data', position: { x: 360, y: 520 } },
  'file-ui': { id: 'file-ui', name: 'profile.view.tsx', folderPath: 'src/ui/profile', position: { x: 1040, y: 380 } },
}

/* Function positions are RELATIVE to their parent file's content origin. */
const initialFunctions = {
  // --- auth.service.ts ---
  'fn-login': { id: 'fn-login', name: 'login()', fileId: 'file-auth', position: { x: PORT.W, y: FILE.HEADER + 8 } },
  'fn-validate': { id: 'fn-validate', name: 'validateToken()', fileId: 'file-auth', position: { x: PORT.W, y: FILE.HEADER + 8 + (FN.H + FN.GAP_Y) } },
  'fn-hash': { id: 'fn-hash', name: 'hashPassword()', fileId: 'file-auth', position: { x: PORT.W, y: FILE.HEADER + 8 + 2 * (FN.H + FN.GAP_Y) } },
  // --- api.client.ts ---
  'fn-fetchUser': { id: 'fn-fetchUser', name: 'fetchUser()', fileId: 'file-api', position: { x: PORT.W, y: FILE.HEADER + 8 } },
  'fn-request': { id: 'fn-request', name: 'request()', fileId: 'file-api', position: { x: PORT.W, y: FILE.HEADER + 8 + (FN.H + FN.GAP_Y) } },
  // --- db.repository.ts ---
  'fn-query': { id: 'fn-query', name: 'query()', fileId: 'file-db', position: { x: PORT.W, y: FILE.HEADER + 8 } },
  'fn-connect': { id: 'fn-connect', name: 'connect()', fileId: 'file-db', position: { x: PORT.W, y: FILE.HEADER + 8 + (FN.H + FN.GAP_Y) } },
  // --- profile.view.tsx ---
  'fn-render': { id: 'fn-render', name: 'renderProfile()', fileId: 'file-ui', position: { x: PORT.W, y: FILE.HEADER + 8 } },
}

/* Call graph: `source` calls `target` (source = caller / upstream owner,
 * target = callee / downstream). This single list powers internal edges AND
 * the left/right port nodes. */
const initialCalls = [
  { source: 'fn-login', target: 'fn-validate' }, // internal (auth)
  { source: 'fn-login', target: 'fn-hash' }, // internal (auth)
  { source: 'fn-login', target: 'fn-fetchUser' }, // auth -> api
  { source: 'fn-validate', target: 'fn-query' }, // auth -> db
  { source: 'fn-fetchUser', target: 'fn-request' }, // internal (api)
  { source: 'fn-fetchUser', target: 'fn-query' }, // api -> db
  { source: 'fn-request', target: 'fn-validate' }, // api -> auth  (gives validate an external caller)
  { source: 'fn-query', target: 'fn-connect' }, // internal (db)
  { source: 'fn-render', target: 'fn-fetchUser' }, // ui -> api
  { source: 'fn-render', target: 'fn-login' }, // ui -> auth
]

const initialSubspaces = {
  'sub-core': {
    id: 'sub-core',
    name: 'Core Domain',
    position: { x: 20, y: 20 },
    size: { width: 760, height: 760 },
    color: '#6366f1',
    description: 'Authentication, networking and persistence live here.',
  },
}

const initialTunables = {
  'tune-cache': { id: 'tune-cache', name: 'CACHE_TTL', value: '300s', position: { x: 1060, y: 120 } },
}

const initialBookmarks = [
  { id: 'bm-auth', name: 'Auth cluster', viewport: { x: 40, y: 20, zoom: 1.1 }, focusObjectId: 'fn-login', temporary: false },
  { id: 'bm-db', name: 'Data layer', viewport: { x: -160, y: -360, zoom: 1 }, focusObjectId: 'fn-query', temporary: false },
]

/* Real directory + dependency graph, derived from the actual files on disk
 * (see projectGraph.js). This is the data behind the "Project Map" view. */
const projectGraph = buildProjectGraph()

/* =============================================================================
 *  STORE
 * ========================================================================== */
export const useStore = create((set, get) => ({
  files: initialFiles,
  functions: initialFunctions,
  calls: initialCalls,
  subspaces: initialSubspaces,
  tunables: initialTunables,
  bookmarks: initialBookmarks,

  // --- Project Map (real directory) ---
  viewMode: 'project', // 'project' (real directory) | 'functions' (mock spatial demo)
  projectFiles: projectGraph.files,
  projectFolders: projectGraph.folders,
  projectEdges: projectGraph.edges, // [{ source, target }] = source imports/affects target
  selectedProjectFileId: null, // the single "active" file (drives arrows + functions + editor)
  selectedFileIds: [], // marquee / ctrl multi-selection (>=2 dims the rest)
  projectFolderFilter: null,
  editorScrollTarget: null, // { path, line, nonce } — jump the editor to a function

  setViewMode: (mode) => set({ viewMode: mode, focusedNodeId: null, selectedProjectFileId: null }),
  // Single, deliberate selection (explorer / search) — also opens the IDE/viewer.
  selectProjectFile: (id) => set({ selectedProjectFileId: id, selectedFileIds: id ? [id] : [], editorFileId: id || null }),
  clearProjectSelection: () => set({ selectedProjectFileId: null, selectedFileIds: [] }),
  // Multi-selection from React Flow (marquee / ctrl-click). One file → active.
  // 2+ files closes any open overlay (IDE / image / audio) — multi-select is for
  // moving files, not viewing them.
  setSelection: (ids) =>
    set((s) => ({
      selectedFileIds: ids,
      selectedProjectFileId: ids.length === 1 ? ids[0] : null,
      editorFileId: ids.length >= 2 ? null : s.editorFileId,
    })),
  setProjectFolderFilter: (folder) => set({ projectFolderFilter: folder }),
  clearProjectFolderFilter: () => set({ projectFolderFilter: null }),

  // Jump the open editor to a function's line range (nonce makes repeat clicks re-fire).
  scrollEditorToLine: (path, line, endLine) =>
    set((s) => ({ editorScrollTarget: { path, line, endLine: endLine || line, nonce: (s.editorScrollTarget?.nonce || 0) + 1 } })),

  // --- Supabase State ---
  supabaseLoading: false,
  supabaseError: null,

  fetchSupabaseFiles: async () => {
    if (!supabase) return
    set({ supabaseLoading: true, supabaseError: null })
    try {
      const { data, error } = await supabase
        .from('project_files')
        .select('*')
        .order('path', { ascending: true })

      if (error) throw error

      if (data && data.length > 0) {
        const projectFiles = {}
        const projectFolders = {}
        const projectEdges = []
        const allPaths = new Set()

        for (const file of data) {
          projectFiles[file.path] = {
            id: file.path,
            path: file.path,
            name: file.name,
            folder: file.folder,
            kind: file.kind,
            url: file.url,
            source: file.source,
            position: file.position || { x: 0, y: 0 },
          }
          allPaths.add(file.path)

          if (!projectFolders[file.folder]) {
            projectFolders[file.folder] = {
              id: file.folder,
              name: file.folder === '/' ? 'project root' : file.folder,
              position: { x: Object.keys(projectFolders).length * 940, y: 0 },
              size: { width: 380, height: 240 },
            }
          }
        }

        // Re-evaluate edges
        for (const path of Object.keys(projectFiles)) {
          const file = projectFiles[path]
          if (file.kind !== 'text') continue
          const source = file.source
          if (typeof source !== 'string') continue
          for (const spec of parseImports(source)) {
            const target = resolveImport(path, spec, allPaths)
            if (!target || target === path) continue
            if (!projectEdges.some((e) => e.source === path && e.target === target)) {
              projectEdges.push({ source: path, target })
            }
          }
        }

        set({ projectFiles, projectFolders, projectEdges })
      }
    } catch (e) {
      console.error('Error fetching files from Supabase:', e)
      set({ supabaseError: e.message })
    } finally {
      set({ supabaseLoading: false })
    }
  },

  persistProjectFilePosition: async (id, position) => {
    if (!supabase) return
    try {
      const { error } = await supabase
        .from('project_files')
        .update({ position })
        .eq('path', id)
      if (error) throw error
    } catch (e) {
      console.error('Error persisting node position to Supabase:', e)
    }
  },

  saveProjectFile: async (path) => {
    const state = get()
    const content = state.fileEdits[path]
    if (content === undefined) return

    if (!supabase) {
      set((s) => {
        const projectFiles = { ...s.projectFiles }
        if (projectFiles[path]) {
          projectFiles[path] = { ...projectFiles[path], source: content }
        }
        const fileEdits = { ...s.fileEdits }
        delete fileEdits[path]
        return { projectFiles, fileEdits }
      })
      return
    }

    set({ supabaseLoading: true, supabaseError: null })
    try {
      const { error } = await supabase
        .from('project_files')
        .update({ source: content })
        .eq('path', path)

      if (error) throw error

      set((s) => {
        const projectFiles = { ...s.projectFiles }
        if (projectFiles[path]) {
          projectFiles[path] = { ...projectFiles[path], source: content }
        }
        const fileEdits = { ...s.fileEdits }
        delete fileEdits[path]
        return { projectFiles, fileEdits }
      })
    } catch (e) {
      console.error('Error saving file to Supabase:', e)
      set({ supabaseError: e.message })
    } finally {
      set({ supabaseLoading: false })
    }
  },

  addProjectFiles: async (newFiles) => {
    if (!supabase) {
      set((state) => {
        const projectFiles = { ...state.projectFiles }
        const projectFolders = { ...state.projectFolders }
        const projectEdges = [...state.projectEdges]
        const allPaths = new Set(Object.keys(projectFiles))
        const occupiedRects = [
          ...Object.values(projectFiles).map((file) => ({ x: file.position.x, y: file.position.y, w: 178, h: 64 })),
          ...Object.values(projectFolders).map((folder) => ({ x: folder.position.x, y: folder.position.y, w: folder.size.width, h: folder.size.height })),
          ...Object.values(state.subspaces).map((subspace) => ({ x: subspace.position.x, y: subspace.position.y, w: subspace.size.width, h: subspace.size.height })),
        ]

        const filesToPlace = newFiles.filter((file) => !projectFiles[file.path])
        const importGrid = findAvailableProjectGridStart(occupiedRects, filesToPlace.length)

        for (const [index, file] of filesToPlace.entries()) {
          const folder = file.folder || dirname(file.path)
          const position =
            file.position || {
              x: importGrid.x + (index % importGrid.side) * 220,
              y: importGrid.y + Math.floor(index / importGrid.side) * 120,
            }

          projectFiles[file.path] = {
            id: file.path,
            path: file.path,
            name: file.name,
            folder,
            kind: file.kind,
            position,
            url: file.url || null,
            source: file.source || null,
          }

          allPaths.add(file.path)
          occupiedRects.push({ x: position.x, y: position.y, w: 178, h: 64 })

          if (!projectFolders[folder]) {
            projectFolders[folder] = {
              id: folder,
              name: folder === '/' ? 'project root' : folder,
              position: { x: Object.keys(projectFolders).length * 940, y: 0 },
              size: { width: 380, height: 240 },
            }
          }
        }

        for (const path of Object.keys(projectFiles)) {
          const file = projectFiles[path]
          if (file.kind !== 'text') continue
          const source = file.source ?? FILE_SOURCE[path]
          if (typeof source !== 'string') continue
          for (const spec of parseImports(source)) {
            const target = resolveImport(path, spec, allPaths)
            if (!target || target === path) continue
            if (!projectEdges.some((e) => e.source === path && e.target === target)) {
              projectEdges.push({ source: path, target })
            }
          }
        }

        return { projectFiles, projectFolders, projectEdges }
      })
      return
    }

    set({ supabaseLoading: true, supabaseError: null })
    try {
      const state = get()
      const projectFiles = { ...state.projectFiles }
      const projectFolders = { ...state.projectFolders }
      const projectEdges = [...state.projectEdges]
      const allPaths = new Set(Object.keys(projectFiles))
      const occupiedRects = [
        ...Object.values(projectFiles).map((file) => ({ x: file.position.x, y: file.position.y, w: 178, h: 64 })),
        ...Object.values(projectFolders).map((folder) => ({ x: folder.position.x, y: folder.position.y, w: folder.size.width, h: folder.size.height })),
        ...Object.values(state.subspaces).map((subspace) => ({ x: subspace.position.x, y: subspace.position.y, w: subspace.size.width, h: subspace.size.height })),
      ]

      const filesToPlace = newFiles.filter((file) => !projectFiles[file.path])
      const importGrid = findAvailableProjectGridStart(occupiedRects, filesToPlace.length)

      const dbInserts = []

      for (const [index, file] of filesToPlace.entries()) {
        const folder = file.folder || dirname(file.path)
        const position =
          file.position || {
            x: importGrid.x + (index % importGrid.side) * 220,
            y: importGrid.y + Math.floor(index / importGrid.side) * 120,
          }

        let fileUrl = file.url || null

        if ((file.kind === 'image' || file.kind === 'audio') && file.rawFile) {
          const fileExt = file.name.split('.').pop()
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`
          const filePath = `${file.kind}s/${fileName}`

          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('files-bucket')
            .upload(filePath, file.rawFile, {
              cacheControl: '3600',
              upsert: false
            })

          if (uploadError) throw uploadError

          const { data: { publicUrl } } = supabase.storage
            .from('files-bucket')
            .getPublicUrl(filePath)

          fileUrl = publicUrl
        }

        const newFileRecord = {
          id: file.path,
          path: file.path,
          name: file.name,
          folder,
          kind: file.kind,
          url: fileUrl,
          source: file.source || null,
          position,
        }

        dbInserts.push(newFileRecord)

        projectFiles[file.path] = newFileRecord
        allPaths.add(file.path)
        occupiedRects.push({ x: position.x, y: position.y, w: 178, h: 64 })

        if (!projectFolders[folder]) {
          projectFolders[folder] = {
            id: folder,
            name: folder === '/' ? 'project root' : folder,
            position: { x: Object.keys(projectFolders).length * 940, y: 0 },
            size: { width: 380, height: 240 },
          }
        }
      }

      if (dbInserts.length > 0) {
        const { error: dbError } = await supabase
          .from('project_files')
          .upsert(dbInserts, { onConflict: 'path' })

        if (dbError) throw dbError
      }

      for (const path of Object.keys(projectFiles)) {
        const file = projectFiles[path]
        if (file.kind !== 'text') continue
        const source = file.source ?? FILE_SOURCE[path]
        if (typeof source !== 'string') continue
        for (const spec of parseImports(source)) {
          const target = resolveImport(path, spec, allPaths)
          if (!target || target === path) continue
          if (!projectEdges.some((e) => e.source === path && e.target === target)) {
            projectEdges.push({ source: path, target })
          }
        }
      }

      set({ projectFiles, projectFolders, projectEdges })
    } catch (e) {
      console.error('Error adding files to Supabase:', e)
      set({ supabaseError: e.message })
    } finally {
      set({ supabaseLoading: false })
    }
  },

  deleteProjectFile: async (id) => {
    if (!supabase) {
      set((state) => {
        const projectFiles = { ...state.projectFiles }
        const projectFolders = { ...state.projectFolders }
        const projectEdges = state.projectEdges.filter((e) => e.source !== id && e.target !== id)

        delete projectFiles[id]
        const folder = state.projectFiles[id]?.folder
        if (folder) {
          const stillInFolder = Object.values(projectFiles).some((file) => file.folder === folder)
          if (!stillInFolder) delete projectFolders[folder]
        }

        return {
          projectFiles,
          projectFolders,
          projectEdges,
          selectedProjectFileId: state.selectedProjectFileId === id ? null : state.selectedProjectFileId,
        }
      })
      return
    }

    set({ supabaseLoading: true, supabaseError: null })
    try {
      const state = get()
      const file = state.projectFiles[id]
      if (file && file.url && file.url.includes('files-bucket')) {
        const bucketPath = file.url.split('/files-bucket/')[1]
        if (bucketPath) {
          const { error: storageError } = await supabase.storage
            .from('files-bucket')
            .remove([bucketPath])

          if (storageError) console.error('Error deleting file from storage:', storageError)
        }
      }

      const { error: dbError } = await supabase
        .from('project_files')
        .delete()
        .eq('path', id)

      if (dbError) throw dbError

      set((state) => {
        const projectFiles = { ...state.projectFiles }
        const projectFolders = { ...state.projectFolders }
        const projectEdges = state.projectEdges.filter((e) => e.source !== id && e.target !== id)

        delete projectFiles[id]
        const folder = state.projectFiles[id]?.folder
        if (folder) {
          const stillInFolder = Object.values(projectFiles).some((file) => file.folder === folder)
          if (!stillInFolder) delete projectFolders[folder]
        }

        return {
          projectFiles,
          projectFolders,
          projectEdges,
          selectedProjectFileId: state.selectedProjectFileId === id ? null : state.selectedProjectFileId,
        }
      })
    } catch (e) {
      console.error('Error deleting file from Supabase:', e)
      set({ supabaseError: e.message })
    } finally {
      set({ supabaseLoading: false })
    }
  },

  // --- AI (Claude) file explanations ---
  apiKey: (typeof localStorage !== 'undefined' && localStorage.getItem('anthropic_api_key')) || '',
  aiModel: (typeof localStorage !== 'undefined' && localStorage.getItem('anthropic_model')) || 'claude-opus-4-8',
  summaries: {}, // { [path]: markdownSummary } — cached per session
  setApiKey: (key) => {
    try { localStorage.setItem('anthropic_api_key', key) } catch {}
    set({ apiKey: key })
  },
  setAiModel: (model) => {
    try { localStorage.setItem('anthropic_model', model) } catch {}
    set({ aiModel: model })
  },
  setSummary: (path, text) => set((s) => ({ summaries: { ...s.summaries, [path]: text } })),

  // --- floating text editor / asset viewer ---
  editorFileId: null, // project file currently open in the floating panel
  fileEdits: {}, // { [path]: editedContent } — in-memory edits (no backend)
  openEditor: (id) => set({ editorFileId: id }),
  closeEditor: () => set({ editorFileId: null }),
  setFileEdit: (path, content) => set((s) => ({ fileEdits: { ...s.fileEdits, [path]: content } })),
  revertFileEdit: (path) =>
    set((s) => {
      const next = { ...s.fileEdits }
      delete next[path]
      return { fileEdits: next }
    }),

  // --- interaction state ---
  focusedNodeId: null, // currently focused FUNCTION id (drives ports/edges/dimming)
  focusedFileId: null, // file highlighted from the File Explorer
  expandedSubspaceId: null, // subspace requesting a full-map zoom
  terminalFileId: null, // file whose terminal modal is open
  searchQuery: '',
  pendingFocus: null, // { id } — a node the map should fitView onto, consumed by MapView
  flowApi: null, // imperative bridge { getViewport, setViewport, fitTo } set by MapView

  setFlowApi: (api) => set({ flowApi: api }),

  /* ----- focus / selection ----- */
  setFocusedNode: (id) => set({ focusedNodeId: id }),
  clearFocus: () => set({ focusedNodeId: null, focusedFileId: null }),

  focusFile: (fileId) => set({ focusedFileId: fileId, pendingFocus: { id: fileId } }),
  requestFocus: (id) => set({ pendingFocus: { id } }),
  consumePendingFocus: () => set({ pendingFocus: null }),

  setExpandedSubspace: (id) => set({ expandedSubspaceId: id, pendingFocus: id ? { id } : get().pendingFocus }),
  clearExpandedSubspace: () => set({ expandedSubspaceId: null }),

  openTerminal: (fileId) => set({ terminalFileId: fileId }),
  closeTerminal: () => set({ terminalFileId: null }),

  setSearchQuery: (q) => set({ searchQuery: q }),

  /* ----- position updates (called from React Flow onNodesChange) ----- */
  moveNode: (id, position) =>
    set((state) => {
      if (state.functions[id]) {
        return { functions: { ...state.functions, [id]: { ...state.functions[id], position } } }
      }
      if (state.files[id]) {
        return { files: { ...state.files, [id]: { ...state.files[id], position } } }
      }
      if (state.subspaces[id]) {
        return { subspaces: { ...state.subspaces, [id]: { ...state.subspaces[id], position } } }
      }
      if (state.tunables[id]) {
        return { tunables: { ...state.tunables, [id]: { ...state.tunables[id], position } } }
      }
      if (state.projectFiles[id]) {
        return { projectFiles: { ...state.projectFiles, [id]: { ...state.projectFiles[id], position } } }
      }
      return {}
    }),

  /* ----- subspace controls ----- */
  setSubspaceColor: (id, color) =>
    set((s) => ({ subspaces: { ...s.subspaces, [id]: { ...s.subspaces[id], color } } })),
  setSubspaceDescription: (id, description) =>
    set((s) => ({ subspaces: { ...s.subspaces, [id]: { ...s.subspaces[id], description } } })),

  /* ----- bookmarks ----- */
  // Save current viewport (used by the top "Save view" button).
  saveBookmark: (viewport, name) =>
    set((s) => ({
      bookmarks: [
        ...s.bookmarks,
        { id: `bm-${Date.now()}`, name: name || `View ${s.bookmarks.length + 1}`, viewport, focusObjectId: s.focusedNodeId, temporary: false },
      ],
    })),
  // Double-click flow: snapshot the *current* view as a temp bookmark first.
  pushTemporaryBookmark: (viewport) =>
    set((s) => ({
      bookmarks: [
        ...s.bookmarks,
        { id: `tmp-${Date.now()}`, name: `↩ Return point`, viewport, focusObjectId: s.focusedNodeId, temporary: true },
      ],
    })),
  removeBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.filter((b) => b.id !== id) })),

  /* ----- creation (context menu / FAB) ----- */
  createSubspace: (position) =>
    set((s) => {
      const id = `sub-${Date.now()}`
      return {
        subspaces: {
          ...s.subspaces,
          [id]: { id, name: 'New Subspace', position, size: { width: 360, height: 280 }, color: '#10b981', description: '' },
        },
      }
    }),
  createFile: (position, folderPath) =>
    set((s) => {
      const id = `file-${Date.now()}`
      return {
        files: { ...s.files, [id]: { id, name: 'untitled.ts', folderPath: folderPath || 'src', position } },
      }
    }),
  createFunction: (fileId, name) =>
    set((s) => {
      const id = `fn-${Date.now()}`
      const siblings = Object.values(s.functions).filter((f) => f.fileId === fileId)
      const y = FILE.HEADER + 8 + siblings.length * (FN.H + FN.GAP_Y)
      return {
        functions: { ...s.functions, [id]: { id, name: name || 'newFn()', fileId, position: { x: PORT.W, y } } },
      }
    }),
}))

/* =============================================================================
 *  DERIVED SELECTORS (pure helpers — not hooks)
 * ========================================================================== */

// Dynamic file size: bounding box of child functions + buffer.
export function getFileSize(functions, fileId) {
  const kids = Object.values(functions).filter((f) => f.fileId === fileId)
  if (kids.length === 0) return { width: FILE.MIN_W, height: FILE.MIN_H }
  let maxX = 0
  let maxY = 0
  for (const f of kids) {
    maxX = Math.max(maxX, f.position.x + FN.W)
    maxY = Math.max(maxY, f.position.y + FN.H)
  }
  return {
    width: Math.max(FILE.MIN_W, maxX + FILE.PAD + PORT.W),
    height: Math.max(FILE.MIN_H, maxY + FILE.PAD),
  }
}

/* Given a focused function, classify every related call into the 4 buckets
 * that drive edges + ports. Returns relative ids so the renderer can build
 * React Flow nodes/edges. */
export function getFocusGraph(state) {
  const { focusedNodeId, functions, calls } = state
  const focused = focusedNodeId && functions[focusedNodeId]
  if (!focused) return null
  const fileId = focused.fileId

  const internalUpstream = [] // same-file callers   -> edge caller→focused
  const internalDownstream = [] // same-file callees -> edge focused→callee
  const leftPorts = [] // external callers (upstream)   -> port on LEFT edge
  const rightPorts = [] // external callees (downstream) -> port on RIGHT edge

  for (const c of calls) {
    if (c.target === focusedNodeId) {
      const caller = functions[c.source]
      if (!caller) continue
      if (caller.fileId === fileId) internalUpstream.push(caller.id)
      else leftPorts.push({ extFnId: caller.id, extFileId: caller.fileId })
    }
    if (c.source === focusedNodeId) {
      const callee = functions[c.target]
      if (!callee) continue
      if (callee.fileId === fileId) internalDownstream.push(callee.id)
      else rightPorts.push({ extFnId: callee.id, extFileId: callee.fileId })
    }
  }
  return { fileId, focusedNodeId, internalUpstream, internalDownstream, leftPorts, rightPorts }
}

/* PROJECT MAP focus: given the selected file, split its dependency edges into
 *   downstream = files this file affects/imports  (arrow exits selected's RIGHT)
 *   upstream   = files that affect/import this one (arrow enters selected's LEFT)
 * plus a `neighbors` set used to dim everything uninvolved. */
export function getProjectFocus(state) {
  const { selectedProjectFileId, projectEdges } = state
  if (!selectedProjectFileId) return null
  const downstream = []
  const upstream = []
  for (const e of projectEdges) {
    if (e.source === selectedProjectFileId) downstream.push(e.target)
    if (e.target === selectedProjectFileId) upstream.push(e.source)
  }
  const neighbors = new Set([selectedProjectFileId, ...downstream, ...upstream])
  return { id: selectedProjectFileId, downstream, upstream, neighbors }
}

/* Current content for a text file in the editor: the in-memory edit if present,
 * otherwise the original source pulled at build time. */
export function getFileContent(state, path) {
  if (path in state.fileEdits) return state.fileEdits[path]
  const projectFile = state.projectFiles?.[path]
  if (projectFile?.source) return projectFile.source
  return FILE_SOURCE[path] ?? ''
}
