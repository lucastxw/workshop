import { memo, useEffect, useState } from 'react'
import { useStore } from '../../store'

const SWATCHES = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#ef4444', '#f43f5e', '#8b5cf6']
const MIN_W = 220
const MIN_H = 180

/* Subspace — a translucent rectangle used to visually group objects. */
function SubspaceNode({ id, data }) {
  const setSubspaceName = useStore((s) => s.setSubspaceName)
  const setSubspaceColor = useStore((s) => s.setSubspaceColor)
  const setSubspaceDescription = useStore((s) => s.setSubspaceDescription)
  const setSubspaceTags = useStore((s) => s.setSubspaceTags)
  const resizeSubspace = useStore((s) => s.resizeSubspace)

  const [showConfig, setShowConfig] = useState(false)
  const [showColors, setShowColors] = useState(false)
  const [resizeMode, setResizeMode] = useState(null)
  const [tagInput, setTagInput] = useState('')

  const width = data.width ?? data.size?.width ?? 360
  const height = data.height ?? data.size?.height ?? 280
  const startX = data.position?.x ?? 0
  const startY = data.position?.y ?? 0
  const tags = Array.isArray(data.tags) ? data.tags : []

  useEffect(() => {
    if (!resizeMode) return undefined

    const onMove = (event) => {
      const dx = event.clientX - resizeMode.startX
      const dy = event.clientY - resizeMode.startY

      let nextWidth = resizeMode.startWidth
      let nextHeight = resizeMode.startHeight
      let nextX = resizeMode.startXPos
      let nextY = resizeMode.startYPos

      switch (resizeMode.mode) {
        case 'se':
          nextWidth = Math.max(MIN_W, resizeMode.startWidth + dx)
          nextHeight = Math.max(MIN_H, resizeMode.startHeight + dy)
          break
        case 'sw':
          nextWidth = Math.max(MIN_W, resizeMode.startWidth - dx)
          nextHeight = Math.max(MIN_H, resizeMode.startHeight + dy)
          nextX = resizeMode.startXPos + (resizeMode.startWidth - nextWidth)
          break
        case 'ne':
          nextWidth = Math.max(MIN_W, resizeMode.startWidth + dx)
          nextHeight = Math.max(MIN_H, resizeMode.startHeight - dy)
          nextY = resizeMode.startYPos + (resizeMode.startHeight - nextHeight)
          break
        case 'nw':
          nextWidth = Math.max(MIN_W, resizeMode.startWidth - dx)
          nextHeight = Math.max(MIN_H, resizeMode.startHeight - dy)
          nextX = resizeMode.startXPos + (resizeMode.startWidth - nextWidth)
          nextY = resizeMode.startYPos + (resizeMode.startHeight - nextHeight)
          break
        case 'e':
          nextWidth = Math.max(MIN_W, resizeMode.startWidth + dx)
          break
        case 'w':
          nextWidth = Math.max(MIN_W, resizeMode.startWidth - dx)
          nextX = resizeMode.startXPos + (resizeMode.startWidth - nextWidth)
          break
        case 's':
          nextHeight = Math.max(MIN_H, resizeMode.startHeight + dy)
          break
        case 'n':
          nextHeight = Math.max(MIN_H, resizeMode.startHeight - dy)
          nextY = resizeMode.startYPos + (resizeMode.startHeight - nextHeight)
          break
        default:
          break
      }

      resizeSubspace(id, { width: nextWidth, height: nextHeight }, { x: nextX, y: nextY })
    }

    const onUp = () => setResizeMode(null)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [resizeMode, resizeSubspace, id])

  const beginResize = (mode, event) => {
    event.preventDefault()
    event.stopPropagation()
    setResizeMode({
      mode,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: width,
      startHeight: height,
      startXPos: startX,
      startYPos: startY,
    })
  }

  const addTag = () => {
    const normalized = tagInput.trim()
    if (!normalized) return
    const nextTags = Array.from(new Set([...tags, normalized]))
    setSubspaceTags(id, nextTags)
    setTagInput('')
  }

  return (
    <div
      className="relative box-border overflow-hidden rounded-[24px] border-2 border-dashed"
      style={{
        width,
        height,
        borderColor: `${data.color}66`,
        background: `${data.color}10`,
        boxShadow: `inset 0 0 60px ${data.color}12`,
      }}
    >
      <div className="absolute left-3 top-2 select-none text-[11px] font-semibold uppercase tracking-wider" style={{ color: `${data.color}cc` }}>
        ◈ {data.name}
      </div>

      <div className="absolute right-2 top-2 z-20 flex items-center gap-1 nodrag">
        <ToolBtn
          label="Configure"
          onClick={() => {
            setShowConfig((v) => !v)
            setShowColors(false)
          }}
        >
          ☰
        </ToolBtn>
        <ToolBtn
          label="Colour"
          onClick={() => {
            setShowColors((v) => !v)
            setShowConfig(false)
          }}
        >
          ◐
        </ToolBtn>
      </div>

      {showConfig && (
        <div className="absolute left-0 top-0 z-10 h-full w-[240px] rounded-[24px] border-r border-slate-700/70 bg-slate-950/95 p-3 shadow-2xl backdrop-blur nodrag">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">Subspace settings</div>
          <label className="mb-2 block text-[11px] font-medium text-slate-300">
            Title
            <input
              autoFocus
              defaultValue={data.name}
              onBlur={(e) => setSubspaceName(id, e.target.value || 'Untitled subspace')}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-sm text-slate-100 outline-none focus:border-indigo-500"
            />
          </label>
          <label className="mb-2 block text-[11px] font-medium text-slate-300">
            Description
            <textarea
              defaultValue={data.description}
              onBlur={(e) => setSubspaceDescription(id, e.target.value)}
              placeholder="Describe this subspace…"
              className="mt-1 h-24 w-full resize-none rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-sm text-slate-100 outline-none focus:border-indigo-500"
            />
          </label>
          <div className="text-[11px] font-medium text-slate-300">
            Tags
            <div className="mt-1 flex gap-1">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                placeholder="Add a tag"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-sm text-slate-100 outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={addTag}
                className="rounded-lg border border-slate-700 bg-slate-800 px-2 text-sm text-slate-200 hover:bg-slate-700"
              >
                +
              </button>
            </div>
            {tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSubspaceTags(id, tags.filter((entry) => entry !== tag))}
                    className="rounded-full border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 hover:bg-slate-700"
                  >
                    #{tag} ×
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showColors && (
        <div className="absolute right-2 top-10 z-20 flex flex-wrap gap-2 rounded-xl border border-slate-700 bg-slate-900/95 p-2 shadow-xl nodrag">
          {SWATCHES.map((color) => (
            <button
              key={color}
              onClick={() => {
                setSubspaceColor(id, color)
                setShowColors(false)
              }}
              className="h-6 w-6 rounded-full ring-2 ring-transparent transition hover:ring-white/70"
              style={{ background: color }}
              title={color}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 rounded-[24px]" />
      <ResizeHandle position="nw" onPointerDown={(e) => beginResize('nw', e)} />
      <ResizeHandle position="n" onPointerDown={(e) => beginResize('n', e)} />
      <ResizeHandle position="ne" onPointerDown={(e) => beginResize('ne', e)} />
      <ResizeHandle position="e" onPointerDown={(e) => beginResize('e', e)} />
      <ResizeHandle position="se" onPointerDown={(e) => beginResize('se', e)} />
      <ResizeHandle position="s" onPointerDown={(e) => beginResize('s', e)} />
      <ResizeHandle position="sw" onPointerDown={(e) => beginResize('sw', e)} />
      <ResizeHandle position="w" onPointerDown={(e) => beginResize('w', e)} />
    </div>
  )
}

function ToolBtn({ children, label, onClick }) {
  return (
    <button
      title={label}
      onClick={(e) => { e.stopPropagation(); onClick() }}
      className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 text-[11px] text-slate-300 hover:bg-slate-800 hover:text-white"
    >
      {children}
    </button>
  )
}

function ResizeHandle({ position, onPointerDown }) {
  const classes = {
    nw: 'left-0 top-0 h-3 w-3 cursor-nwse-resize',
    n: 'left-1/2 top-0 h-2 w-8 -translate-x-1/2 cursor-ns-resize',
    ne: 'right-0 top-0 h-3 w-3 cursor-nesw-resize',
    e: 'right-0 top-1/2 h-8 w-2 -translate-y-1/2 cursor-ew-resize',
    se: 'bottom-0 right-0 h-3 w-3 cursor-nwse-resize',
    s: 'bottom-0 left-1/2 h-2 w-8 -translate-x-1/2 cursor-ns-resize',
    sw: 'bottom-0 left-0 h-3 w-3 cursor-nesw-resize',
    w: 'left-0 top-1/2 h-8 w-2 -translate-y-1/2 cursor-ew-resize',
  }

  return <div className={`absolute ${classes[position]} rounded-full bg-transparent`} onPointerDown={onPointerDown} />
}

export default memo(SubspaceNode)
