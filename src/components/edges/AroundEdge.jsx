import { BaseEdge } from 'reactflow'

/* AroundEdge — routes a dependency arrow as a smooth curve that leaves the file
 * horizontally (so it clears the ƒ function pills that sit just to the file's
 * right) and bellies away from the node row, reading as a line that goes
 * *around* the boxes rather than slicing through them. Sibling edges from the
 * same file get an increasing `lane` offset so a fan of dependencies peels
 * apart evenly and stays legible instead of overlapping into a tangle.
 *
 *   data.bow  = 'up' | 'down'  (which side of the row to arc toward)
 *   data.lane = 0,1,2,…        (extra separation for sibling edges)
 */
export default function AroundEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd, style, data }) {
  const dx = targetX - sourceX
  const dy = targetY - sourceY
  const dist = Math.hypot(dx, dy)
  const lane = data?.lane ?? 0
  const sign = data?.bow === 'up' ? -1 : 1
  const dir = dx >= 0 ? 1 : -1

  // Pull the control points out horizontally from both endpoints so the curve
  // departs/arrives roughly level — this is what steers it clear of the pill
  // column that hugs the file's right edge.
  const reach = Math.max(60, Math.abs(dx) * 0.45)
  const c1x = sourceX + reach * dir
  const c2x = targetX - reach * dir

  // Vertical belly: a small base offset (kept even at lane 0 so the line bows
  // off the row's centreline) plus a bounded per-lane step so big fans spread
  // gently instead of exploding outward.
  const bow = (Math.min(110, 28 + dist * 0.1) + lane * 20) * sign
  const c1y = sourceY + bow
  const c2y = targetY + bow

  const path = `M ${sourceX},${sourceY} C ${c1x},${c1y} ${c2x},${c2y} ${targetX},${targetY}`

  return <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />
}
