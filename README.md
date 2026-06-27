# Infinite Spatial IDE

A prototype of a spatial, infinitely-zoomable code editor where files and functions live on a 2D map instead of a file tree.

It has **two views** (toggle top-left of the canvas):

1. **📁 Project Map** _(default)_ — the **real directory** of this repo, rendered as nodes clustered by folder. Click a file to reveal its **actual import dependencies** as directional arrows. This graph is generated from the live source tree, not mock data (see below).
2. **◯ Functions** — a mock spatial demo: single-clicking a function reveals its call graph as live edges and dynamic "port" connectors on the file's edges.

> Prototype only — there is **no backend**. The Functions view is driven by a hardcoded mock graph in [`src/store.js`](src/store.js); the Project Map is derived at build time from the real files via Vite's `import.meta.glob` ([`src/projectGraph.js`](src/projectGraph.js)).

## Stack

| Concern        | Library                  |
| -------------- | ------------------------ |
| Build/dev      | Vite + React 18          |
| Styling        | Tailwind CSS             |
| Global state   | zustand                  |
| Map canvas     | reactflow (v11)          |
| Resizable UI   | react-resizable-panels   |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Layout

```
┌───────────────┬──────────────────────────────────────┐
│ File Explorer │   ⌕ Search        ★ Save view         │
├───────────────┤                                       │
│   Bookmarks   │            Map View (70%)             │
│   Manager     │        infinite zoomable canvas    + │
└───────────────┴──────────────────────────────────────┘
   Left col 30%                Right col 70%
```

Both the horizontal split (30/70) and the left column's vertical split (50/50) are drag-resizable.

## Project Map: real directory → dependency graph

The headline view reflects the **actual repository**, with no backend and no manual data entry:

- [`src/projectGraph.js`](src/projectGraph.js) calls `import.meta.glob('/src/**', { query: '?raw', eager: true })` so Vite enumerates every file in the tree and hands over its source text at build time.
- It parses real `import` / `require` statements, resolves the relative specifiers to actual files, and emits `edges[] = { source, target }` (source **imports / affects** target). Bare imports (`react`, `zustand`, …) are ignored since they aren't directory files.
- Files are laid out in **folder clusters** — every file in the same folder sits inside the same translucent rectangle, so siblings are physically close.

**Interaction** ([`ProjectFileNode`](src/components/nodes/ProjectFileNode.jsx) + [`getProjectFocus`](src/store.js)): click a file and the store splits its edges into two directions:

| Direction      | Meaning                                  | Arrow                                   | Colour |
| -------------- | ---------------------------------------- | --------------------------------------- | ------ |
| **downstream** | files this file affects / imports        | exits the selected file's **right** →   | green  |
| **upstream**   | files that affect / import this file     | enters the selected file's **left** ←   | amber  |

Every uninvolved file fades to low opacity so attention stays on the selected file and its neighbours. The **File Explorer** is mode-aware: in Project Map it lists the real directory, and clicking an entry selects + frames that file on the map.

Edges use a custom [`AroundEdge`](src/components/edges/AroundEdge.jsx) that bows **around** node bodies rather than slicing through them, and gives each sibling edge an increasing "lane" offset so a fan of dependencies stays readable even when nodes are close.

## Opening files: editor & asset viewers

**Double-click** a file node (or single-click won't trigger it — single-click is reserved for dependency tracing) to open a small **floating, draggable panel** ([`FloatingEditor`](src/components/FloatingEditor.jsx)) whose contents depend on the file type:

| File kind | Panel |
| --------- | ----- |
| **text / code** (`.js`, `.jsx`, `.css`, `.json`, `.md`, …) | an **editable** code editor showing the real source (pulled via `?raw`). Edits are kept **in-memory** in the store (`fileEdits`) — no backend, so they reset on reload; **Revert** restores the original. |
| **image** (`.svg`, `.png`, …) | an image viewer (`<img>` from the file's `?url`). Demo node: `src/assets/logo.svg`. |
| **audio** (`.wav`, `.mp3`, …) | an audio player with a Play button. Demo node: `src/assets/chime.wav`. |

Asset files are enumerated with a second `import.meta.glob(..., { query: '?url' })` so images/audio resolve to servable URLs; [`kindOf`](src/projectGraph.js) classifies each file by extension.

## AI: explain a file with Claude

Inside the editor, text files have an **✨ AI Explain** tab that asks Claude to summarise and explain the file's real source ([`AiSummary`](src/components/AiSummary.jsx) + [`lib/ai.js`](src/lib/ai.js)):

- A single streaming call to the Anthropic Messages API via the official [`@anthropic-ai/sdk`](https://github.com/anthropics/anthropic-sdk-typescript) — the summary renders live as it arrives.
- Default model **`claude-opus-4-8`** (switchable to Sonnet 4.6 / Haiku 4.5 in the panel), with **adaptive thinking** on the models that support it.
- The structured prompt asks for **Purpose · Key parts · Dependencies & data flow · Notes**, rendered as lightweight Markdown. Results are cached per file for the session.

> ⚠️ **No backend, so the key lives in the browser.** You paste an Anthropic API key into the panel; it's stored in `localStorage` and sent **directly** to Anthropic from the page (`dangerouslyAllowBrowser`). This is acceptable for local prototyping only — **in production, proxy these calls through a small server** that holds the key, and never ship the key to the client. The panel shows this warning before a key is entered.

## The core idea (Functions view): focus → ports

The store holds a flat call list (`source → target`). When you single-click a function,
[`getFocusGraph`](src/store.js) classifies every related call by comparing the parent `fileId`:

| Relationship              | Result                                    |
| ------------------------- | ----------------------------------------- |
| same-file caller          | internal **upstream** edge                |
| same-file callee          | internal **downstream** edge              |
| **other-file** caller     | **left port** (something calls in)        |
| **other-file** callee     | **right port** (this function calls out)  |

[`MapView.jsx`](src/components/MapView.jsx) derives port nodes as children of the focused file,
positions them on the left/right edges, colours them by the crossing file (`FILE_COLORS`), draws
animated edges, and dims all sibling functions.

**Try it:** click `validateToken()` in `auth.service.ts` — it has a left port (called from
`api.client.ts`), a right port (it calls `db.repository.ts`), and an internal caller, so it
exercises every path at once.

## Custom node types

- **Subspace** (translucent rectangle) — visual grouping. Top-right toolbar: Description · Colour · Expand (zooms it to fill the map).
- **File** (square) — movable container that auto-resizes (`getFileSize`) to enclose the function pills inside it. Double-click opens the terminal editor modal.
- **Function** (pill) — lives inside a file; single-click focuses it.
- **Tunable** (square variant) — a tweakable configuration value.

## Interactions

| Action                                | Result                                                              |
| ------------------------------------- | ------------------------------------------------------------------ |
| Toggle **📁 Project Map / ◯ Functions** | Switches between the real directory graph and the mock demo       |
| Click a file in **Project Map**       | Reveals dependency arrows (green = affects, amber = affected-by), dims the rest |
| **Double-click** a file in Project Map | Opens the floating panel — code editor (text), image viewer, or audio player |
| **✨ AI Explain** tab (text files)      | Streams a Claude-generated summary of the file (needs an Anthropic API key) |
| Click a file in the Explorer          | Highlights and pans/zooms the map to it                            |
| Single-click a function               | Focus: dimming, internal edges, dynamic ports                      |
| Double-click a file (node or list)    | Opens the terminal editor modal (Esc to close)                     |
| **★ Save view**                       | Saves the current viewport as a bookmark                           |
| Double-click a bookmark               | Snapshots current view as a `↩ Return point`, flies to the bookmark, focuses its object |
| Right-click canvas / **+** FAB        | Create Subspace, File (prompts folder), or Function (pick file)    |
| Search bar                            | Jump to any file / function / subspace by name                     |

## Project structure

```
src/
├─ store.js                 # state + both graphs' logic (start here)
├─ projectGraph.js          # builds the REAL directory graph via import.meta.glob
├─ lib/ai.js                # Claude streaming call (summarise + explain a file)
├─ App.jsx
├─ assets/                  # demo non-text nodes
│  ├─ logo.svg              #   image viewer demo
│  └─ chime.wav             #   audio player demo
└─ components/
   ├─ Layout.jsx            # 30/70 split, left column split 50/50
   ├─ FileExplorer.jsx      # mode-aware (real dir | mock files)
   ├─ BookmarkManager.jsx
   ├─ MapView.jsx           # both views: node/edge/port derivation, click logic, search, menu
   ├─ TerminalModal.jsx
   ├─ FloatingEditor.jsx    # draggable text editor / image / audio panel (+ AI tab)
   ├─ AiSummary.jsx         # Claude "explain this file" panel
   ├─ edges/
   │  └─ AroundEdge.jsx     # curved edge that routes around nodes
   └─ nodes/
      ├─ ClusterNode.jsx       # Project Map: folder background
      ├─ ProjectFileNode.jsx   # Project Map: a real file + dependency highlighting
      ├─ SubspaceNode.jsx
      ├─ FileNode.jsx
      ├─ FunctionNode.jsx
      ├─ TunableNode.jsx
      └─ PortNode.jsx
```

## Known prototype limitations

- **Project Map is build-time** — `import.meta.glob('?raw', { eager: true })` inlines every file's source into the bundle to parse imports client-side (no backend). Great for a prototype; for a large repo you'd move this to a small build script or dev-server endpoint. In `dev` it re-globs on add/remove of files via HMR.
- **Import parsing is regex-based** — it catches `import … from '…'`, bare `import '…'`, dynamic `import('…')` and `require('…')`, resolving relative paths only. It does not follow path aliases or `package.json` exports.
- **The AI key is client-side** — calling Claude from the browser with a user-pasted key (`dangerouslyAllowBrowser`) exposes that key on the page. This is a prototype affordance; production must route the call through a backend proxy. The Anthropic SDK also pulls in `node:fs`/`node:path` for its disk-based credential loader, which Vite stubs for the browser — harmless here because we always pass the key explicitly and never touch that path.
- **No cross-file drag-reparenting** (Functions view) — functions are clamped to their parent file (`extent: 'parent'`). Files auto-grow to contain their functions, but a function can't yet be dragged from one file into another.
- Node positions commit to the store on every drag frame (fine at this scale; would want a drag-end debounce for large graphs).
- Creation flows use `window.prompt` to stay dependency-free — swap for a real modal in production.
