# Infinite Spatial IDE

A prototype of a spatial, infinitely-zoomable code editor where files and functions live on a 2D map instead of a file tree. Single-clicking a function reveals its call graph as live edges and dynamic "port" connectors on the file's edges.

> Prototype only — there is **no backend**. The entire app is driven by a hardcoded mock graph in [`src/store.js`](src/store.js).

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

## The core idea: focus → ports

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
├─ store.js                 # mock graph + all state/logic (start here)
├─ App.jsx
└─ components/
   ├─ Layout.jsx            # 30/70 split, left column split 50/50
   ├─ FileExplorer.jsx
   ├─ BookmarkManager.jsx
   ├─ MapView.jsx           # node/edge/port derivation, click logic, search, context menu
   ├─ TerminalModal.jsx
   └─ nodes/
      ├─ SubspaceNode.jsx
      ├─ FileNode.jsx
      ├─ FunctionNode.jsx
      ├─ TunableNode.jsx
      └─ PortNode.jsx
```

## Known prototype limitations

- **No cross-file drag-reparenting** — functions are clamped to their parent file (`extent: 'parent'`). Files auto-grow to contain their functions, but a function can't yet be dragged from one file into another.
- Node positions commit to the store on every drag frame (fine at this scale; would want a drag-end debounce for large graphs).
- Creation flows use `window.prompt` to stay dependency-free — swap for a real modal in production.
