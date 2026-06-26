import { memo } from 'react'

/* Tunable — a visual variant of the square/file object representing a tweakable
 * configuration value. */
function TunableNode({ data }) {
  return (
    <div className="flex h-[88px] w-[150px] flex-col rounded-xl border border-cyan-500/50 bg-gradient-to-br from-cyan-900/40 to-slate-900/80 p-2.5 shadow-lg shadow-cyan-900/30">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-cyan-300/80">
        <span>⚙</span>
        <span>tunable</span>
      </div>
      <div className="mt-1 truncate font-mono text-[12px] text-slate-100">{data.name}</div>
      <div className="mt-auto rounded-md bg-slate-950/60 px-2 py-1 text-center font-mono text-[13px] font-semibold text-cyan-200">
        {data.value}
      </div>
    </div>
  )
}

export default memo(TunableNode)
