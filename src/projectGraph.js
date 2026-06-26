/* =============================================================================
 *  PROJECT GRAPH  —  derives a REAL file/dependency graph from the actual
 *  directory, with NO backend.
 *
 *  • Text files: pulled with `?raw` so we get the source (parsed for imports
 *    and shown in the floating editor).
 *  • Asset files (images / audio): pulled with `?url` so we get a servable URL
 *    for the image viewer / audio player.
 *
 *  edges[i] = { source, target } means `source` imports / affects `target`.
 * ========================================================================== */

// Text/source files → raw text.
const RAW = import.meta.glob(['/src/**/*.{js,jsx,ts,tsx,css}', '/*.{js,json,html,md}'], {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Binary assets → URLs.
const ASSETS = import.meta.glob(['/src/**/*.{svg,png,jpg,jpeg,gif,webp,avif,mp3,wav,ogg,m4a,flac}'], {
  query: '?url',
  import: 'default',
  eager: true,
})

/* Source map exported for the editor (text files only). */
export const FILE_SOURCE = RAW

const IMAGE_EXT = new Set(['svg', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'avif'])
const AUDIO_EXT = new Set(['mp3', 'wav', 'ogg', 'm4a', 'flac', 'aac'])
export function kindOf(name) {
  const ext = name.slice(name.lastIndexOf('.') + 1).toLowerCase()
  if (IMAGE_EXT.has(ext)) return 'image'
  if (AUDIO_EXT.has(ext)) return 'audio'
  return 'text'
}

/* ---------- path helpers (POSIX, repo-absolute like "/src/store.js") ---------- */
export function dirname(p) {
  const i = p.lastIndexOf('/')
  return i <= 0 ? '/' : p.slice(0, i)
}
export function basename(p) {
  return p.slice(p.lastIndexOf('/') + 1)
}
export function joinPath(dir, rel) {
  const parts = `${dir}/${rel}`.split('/')
  const stack = []
  for (const part of parts) {
    if (part === '' || part === '.') continue
    if (part === '..') stack.pop()
    else stack.push(part)
  }
  return '/' + stack.join('/')
}

const EXT_CANDIDATES = ['', '.js', '.jsx', '.ts', '.tsx', '.css', '/index.js', '/index.jsx', '/index.ts', '/index.tsx']
export function resolveImport(fromPath, spec, allPaths) {
  if (!spec.startsWith('.')) return null // bare/node_modules import → not a directory file
  const base = joinPath(dirname(fromPath), spec)
  for (const ext of EXT_CANDIDATES) {
    const candidate = base + ext
    if (allPaths.has(candidate)) return candidate
  }
  return null
}

const IMPORT_RE = /(?:import\s+[^'"]*from\s*|import\s*|require\s*\(\s*|import\s*\(\s*)['"]([^'"]+)['"]/g
export function parseImports(source) {
  const specs = []
  let m
  while ((m = IMPORT_RE.exec(source)) !== null) specs.push(m[1])
  return specs
}

/* ---------- layout constants (roomier than before so edges stay legible) ---------- */
const FILE_W = 178
const FILE_H = 64
const F_GAP = 36
const CLUSTER_COLS = 3
const LABEL_H = 32
const C_PAD = 22
const CLUSTER_GAP = 180
const CLUSTERS_PER_ROW = 3

export function buildProjectGraph() {
  const textPaths = Object.keys(RAW)
  const assetPaths = Object.keys(ASSETS)
  const paths = [...new Set([...textPaths, ...assetPaths])].sort()
  const allPaths = new Set(paths)

  // ----- files, grouped by folder -----
  const files = {}
  const foldersMap = {}
  for (const p of paths) {
    const folder = dirname(p)
    const kind = kindOf(basename(p))
    files[p] = {
      id: p,
      name: basename(p),
      folder,
      path: p,
      kind,
      url: ASSETS[p] || null,
      position: { x: 0, y: 0 },
    }
    ;(foldersMap[folder] ||= []).push(p)
  }

  // ----- edges from real imports (text files only) -----
  const seen = new Set()
  const edges = []
  for (const p of textPaths) {
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
  svg: '#a78bfa',
  png: '#a78bfa',
  jpg: '#a78bfa',
  wav: '#22d3ee',
  mp3: '#22d3ee',
}
