import { useEffect, useRef, useState } from 'react'
import { useStore, getFileContent } from '../store'
import AiSummary from './AiSummary'

/* A small floating, draggable panel that opens on double-click of a project
 * file node:
 *   • text  → an editable code editor (edits are kept in-memory, no backend)
 *   • image → an image viewer
 *   • audio → an audio player with a Play button
 */
export default function FloatingEditor() {
  const editorFileId = useStore((s) => s.editorFileId)
  const projectFiles = useStore((s) => s.projectFiles)
  const closeEditor = useStore((s) => s.closeEditor)
  const setFileEdit = useStore((s) => s.setFileEdit)
  const revertFileEdit = useStore((s) => s.revertFileEdit)
  const fileEdits = useStore((s) => s.fileEdits)
  // subscribe so the textarea re-renders on external content changes
  const content = useStore((s) => (editorFileId ? getFileContent(s, editorFileId) : ''))

  const [tab, setTab] = useState('code') // 'code' | 'ai' (text files only)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const drag = useRef(null)
  const audioRef = useRef(null)

  // Open near the top-right of the viewport each time a new file is opened.
  useEffect(() => {
    if (editorFileId) {
      setPos({ x: Math.max(24, window.innerWidth - 470), y: 96 })
      setTab('code')
    }
  }, [editorFileId])

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current) return
      setPos({ x: e.clientX - drag.current.dx, y: e.clientY - drag.current.dy })
    }
    const onUp = () => (drag.current = null)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeEditor()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeEditor])

  if (!editorFileId) return null
  const file = projectFiles[editorFileId]
  if (!file) return null

  const edited = file.path in fileEdits
  const startDrag = (e) => {
    drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
  }

  return (
    <div
      className="fixed z-50 flex w-[440px] max-w-[92vw] flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#0b0e14] shadow-2xl"
      style={{ left: pos.x, top: pos.y, height: file.kind === 'text' ? 420 : 'auto' }}
    >
      {/* title bar (drag handle) */}
      <div
        onMouseDown={startDrag}
        className="flex cursor-grab items-center gap-2 border-b border-slate-800 bg-slate-900 px-3 py-2 active:cursor-grabbing"
      >
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500" />
          <span className="h-3 w-3 rounded-full bg-amber-500" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <span className="ml-1 truncate font-mono text-xs text-slate-300">{file.path}</span>
        {edited && <span className="rounded bg-amber-500/20 px-1.5 text-[10px] text-amber-300">● edited</span>}
        <span className="ml-auto rounded bg-slate-800 px-1.5 text-[10px] uppercase text-slate-400">{file.kind}</span>
        <button onClick={closeEditor} className="text-slate-500 hover:text-white">✕</button>
      </div>

      {/* body */}
      {file.kind === 'text' && (
        <>
          {/* Code / AI tabs */}
          <div className="flex items-center gap-1 border-b border-slate-800 bg-slate-900/60 px-2 py-1 text-[11px]">
            <TabBtn active={tab === 'code'} onClick={() => setTab('code')}>{'</> Code'}</TabBtn>
            <TabBtn active={tab === 'ai'} onClick={() => setTab('ai')}>✨ AI Explain</TabBtn>
            <span className="ml-auto pr-1 text-[10px] text-slate-600">Claude</span>
          </div>

          {tab === 'code' ? (
            <>
              <textarea
                spellCheck={false}
                value={content}
                onChange={(e) => setFileEdit(file.path, e.target.value)}
                className="thin-scroll flex-1 resize-none bg-[#0b0e14] p-3 font-mono text-[12.5px] leading-relaxed text-slate-200 outline-none"
              />
              <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-3 py-1.5 text-[11px]">
                <span className="text-slate-500">{content.split('\n').length} lines · in-memory only</span>
                <button
                  disabled={!edited}
                  onClick={() => revertFileEdit(file.path)}
                  className="ml-auto rounded px-2 py-1 text-slate-300 enabled:hover:bg-slate-800 disabled:opacity-40"
                >
                  Revert
                </button>
              </div>
            </>
          ) : (
            <AiSummary file={file} content={content} />
          )}
        </>
      )}

      {file.kind === 'image' && (
        <div className="flex items-center justify-center bg-[repeating-conic-gradient(#1e2533_0%_25%,#11151f_0%_50%)] bg-[length:24px_24px] p-4">
          <img src={file.url} alt={file.name} className="max-h-[320px] max-w-full rounded-lg object-contain" />
        </div>
      )}

      {file.kind === 'audio' && (
        <div className="flex flex-col items-center gap-3 p-5">
          <button
            onClick={() => audioRef.current?.play()}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-lg transition hover:bg-indigo-500 active:scale-95"
            title="Play"
          >
            ▶
          </button>
          <audio ref={audioRef} src={file.url} controls className="w-full" />
          <span className="text-[11px] text-slate-500">{file.name}</span>
        </div>
      )}
    </div>
  )
}

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded px-2 py-1 font-medium transition-colors',
        active ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
