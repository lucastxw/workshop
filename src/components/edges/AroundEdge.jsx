import { BaseEdge } from 'reactflow'

/* AroundEdge — instead of a straight line that slices through node bodies, this
 * draws a curve that bows away from the node row so the arrow visibly routes
 * *around* the nodes. Parallel edges from the same node get increasing `lane`
 * offsets so a fan of dependencies spreads out and stays readable.
 *
 *   data.bow  = 'up' | 'down'  (which way to arc)
 *   data.lane = 0,1,2,…        (extra separation for sibling edges)
 */
export default function AroundEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd, style, data }) {
  const dx = targetX - sourceX
  const dy = targetY - sourceY
  const dist = Math.hypot(dx, dy)
  const lane = data?.lane ?? 0
  const sign = data?.bow === 'up' ? -1 : 1

  // Bow grows with distance (so long edges clear more) plus per-lane spreading.
  const bow = (Math.min(170, 55 + dist * 0.16) + lane * 30) * sign

  // Control points pushed out perpendicular-ish (vertically) from the midline,
  // biased toward the endpoints so the curve leaves/enters roughly horizontally.
  const c1x = sourceX + dx * 0.25
  const c2x = sourceX + dx * 0.75
  const cy = (sourceY + targetY) / 2 + bow

  const path = `M ${sourceX},${sourceY} C ${c1x},${cy} ${c2x},${cy} ${targetX},${targetY}`

  return <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />
}
