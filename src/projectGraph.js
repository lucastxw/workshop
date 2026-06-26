/* =============================================================================
 *  PROJECT GRAPH  —  derives a REAL file/dependency graph from the actual
 *  directory, with NO backend.
 *
 *  Vite's `import.meta.glob` enumerates every matching file in the repo at
 *  build time and (with `?raw`) hands us its source text. We parse the real
 *  `import` / `require` statements to build true file→file dependency edges,
 *  then lay the files out in folder clusters.
 *
 *  → Files in the same folder are grouped into the same translucent cluster.
 *  → edges[i] = { source, target } means `source` imports / affects `target`.
 * ========================================================================== */

// Eagerly pull raw source for project files (src tree + root config/docs).
const RAW = import.meta.glob(['/src/**/*.{js,jsx,ts,tsx,css}', '/*.{js,json,html,md}'], {
  query: '?raw',
  import: 'default',
  eager: true,
})

/* ---------- path helpers (POSIX, repo-absolute like "/src/store.js") ---------- */
function dirname(p) {
  const i = p.lastIndexOf('/')
  return i <= 0 ? '/' : p.slice(0, i)
}
function basename(p) {
  return p.slice(p.lastIndexOf('/') + 1)
}
function joinPath(dir, rel) {
  const parts = `${dir}/${rel}`.split('/')
  const stack = []
  for (const part of parts) {
    if (part === '' || part === '.') continue
    if (part === '..') stack.pop()
    else stack.push(part)
  }
  return '/' + stack.join('/')
}

/* Resolve a relative import specifier to a real file path in our set. */
const EXT_CANDIDATES = ['', '.js', '.jsx', '.ts', '.tsx', '.css', '/index.js', '/index.jsx', '/index.ts', '/index.tsx']
function resolveImport(fromPath, spec, allPaths) {
  if (!spec.startsWith('.')) return null // bare/node_modules import → not a directory file
  const base = joinPath(dirname(fromPath), spec)
  for (const ext of EXT_CANDIDATES) {
    const candidate = base + ext
    if (allPaths.has(candidate)) return candidate
  }
  return null
}

/* Pull import sources out of a file's raw text. */
const IMPORT_RE = /(?:import\s+[^'"]*from\s*|import\s*|require\s*\(\s*|import\s*\(\s*)['"]([^'"]+)['"]/g
function parseImports(source) {
  const specs = []
  let m
  while ((m = IMPORT_RE.exec(source)) !== null) specs.push(m[1])
  return specs
}

/* ---------- layout constants ---------- */
const FILE_W = 174
const FILE_H = 62
const F_GAP = 16
const CLUSTER_COLS = 3
const LABEL_H = 30
const C_PAD = 18
const CLUSTER_GAP = 90
const CLUSTERS_PER_ROW = 3

export function buildProjectGraph() {
  const paths = Object.keys(RAW).sort()
  const allPaths = new Set(paths)

  // ----- files, grouped by folder -----
  const files = {}
  const foldersMap = {} // folderId -> [paths]
  for (const p of paths) {
    const folder = dirname(p)
    files[p] = { id: p, name: basename(p), folder, path: p, position: { x: 0, y: 0 } }
    ;(foldersMap[folder] ||= []).push(p)
  }

  // ----- edges from real imports -----
  const seen = new Set()
  const edges = []
  for (const p of paths) {
    const source = RAW[p]
    if (typeof source !== 'string') continue
    for (const spec of parseImports(source)) {
      const target = resolveImport(p, spec, allPaths)
      if (!target || target === p) continue
      const key = `${p}→${target}`
      if (seen.has(key)) continue
      seen.add(key)
      edges.push({ source: p, target })
    }
  }

  // ----- cluster + file layout -----
  const folders = {}
  const folderIds = Object.keys(foldersMap).sort()
  let x = 0
  let y = 0
  let rowMaxH = 0
  folderIds.forEach((folderId, idx) => {
    const members = foldersMap[folderId].slice().sort()
    const cols = Math.min(CLUSTER_COLS, members.length)
    const rows = Math.ceil(members.length / cols)
    const contentW = cols * FILE_W + (cols - 1) * F_GAP
    const contentH = rows * FILE_H + (rows - 1) * F_GAP
    const width = contentW + 2 * C_PAD
    const height = LABEL_H + contentH + 2 * C_PAD

    folders[folderId] = {
      id: folderId,
      name: folderId === '/' ? 'project root' : folderId,
      position: { x, y },
      size: { width, height },
    }

    members.forEach((p, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      files[p].position = {
        x: x + C_PAD + col * (FILE_W + F_GAP),
        y: y + LABEL_H + C_PAD + row * (FILE_H + F_GAP),
      }
    })

    x += width + CLUSTER_GAP
    rowMaxH = Math.max(rowMaxH, height)
    if ((idx + 1) % CLUSTERS_PER_ROW === 0) {
      x = 0
      y += rowMaxH + CLUSTER_GAP
      rowMaxH = 0
    }
  })

  return { files, folders, edges }
}

export const FILE_EXT_COLOR = {
  jsx: '#38bdf8',
  tsx: '#38bdf8',
  js: '#eab308',
  ts: '#eab308',
  json: '#f59e0b',
  css: '#ec4899',
  md: '#94a3b8',
  html: '#fb923c',
}
