import { memo, useState } from 'react'
import { useStore } from '../../store'

/* Tunable — an OPAQUE card holding one or more tweakable config values. Each
 * variable has a NAME and a VALUE that the user can type freely. "Save & commit"
 * then searches every text file in the project and reassigns that variable to
 * its value (JS / TS / Python / C++ / …), persisting the touched files. */
function TunableNode({ id, data }) {
  const updateTunerVariable = useStore((s) => s.updateTunerVariable)
  const removeTunerVariable = useStore((s) => s.removeTunerVariable)
  const addTunerVariable = useStore((s) => s.addTunerVariable)
  const setSelectedTunableVariable = useStore((s) => s.setSelectedTunableVariable)
  const commitTuner = useStore((s) => s.commitTuner)
  const selected = useStore((s) => s.selectedTunableVariable)
  const supabaseLoading = useStore((s) => s.supabaseLoading)

  const [committing, setCommitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleCommit = async () => {
    setCommitting(true)
    setStatus(null)
    const res = await commitTuner(id)
    setCommitting(false)
    if (!res || res.changedFiles === 0) {
      setStatus({ ok: false, msg: 'No matching variables found in any file.' })
    } else {
      setStatus({
        ok: true,
        msg: `Updated ${res.changedCount} assignment${res.changedCount === 1 ? '' : 's'} across ${res.changedFiles} file${res.changedFiles === 1 ? '' : 's'}.`,
      })
    }
  }

  return (
    <div className="flex w-full flex-col rounded-2xl border border-cyan-500/70 bg-paper p-3 shadow-xl">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-cyan-400">
        <div className="flex items-center gap-1.5">
          <span>⚙</span>
          <span>tuner</span>
        </div>
        <div className="truncate font-mono text-[11px] text-slate-500">{data.fileId}</div>
      </div>
      <div className="mt-1.5 truncate font-semibold text-slate-100">{data.name}</div>

      <div className="mt-3 space-y-2">
        {data.variables?.map((variable) => {
          const isSelected = selected?.tunerId === id && selected?.variableId === variable.id
          return (
            <div
              key={variable.id}
              className={`rounded-xl border p-2 ${isSelected ? 'border-cyan-400 bg-cyan-900' : 'border-slate-700 bg-ecru'}`}
            >
              <div className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: variable.colorA }} />
                <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: variable.colorB }} />
                <input
                  value={variable.name}
                  onFocus={() => setSelectedTunableVariable(id, variable.id)}
                  onChange={(event) => updateTunerVariable(id, variable.id, { name: event.target.value })}
                  placeholder="variable name"
                  className="nodrag w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 font-mono text-[12px] text-slate-100 outline-none focus:border-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => removeTunerVariable(id, variable.id)}
                  className="nodrag rounded-md border border-slate-700 px-2 py-1 text-[11px] text-slate-500 hover:bg-slate-800"
                  title="Remove variable"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wide text-slate-500">value</span>
                <input
                  value={variable.value}
                  onFocus={() => setSelectedTunableVariable(id, variable.id)}
                  onChange={(event) => updateTunerVariable(id, variable.id, { value: event.target.value })}
                  placeholder="value"
                  className="nodrag w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-[12px] text-slate-100 outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => addTunerVariable(id, data.fileId, '', '')}
        className="nodrag mt-2 rounded-lg border border-dashed border-slate-600 px-2 py-1.5 text-[12px] text-slate-500 transition hover:border-cyan-500 hover:text-cyan-600"
      >
        + Add variable
      </button>

      <button
        type="button"
        onClick={handleCommit}
        disabled={committing || supabaseLoading}
        className="nodrag mt-2 rounded-lg bg-cyan-600 px-3 py-2 text-[12px] font-semibold text-white transition enabled:hover:bg-cyan-500 disabled:opacity-50"
      >
        {committing ? 'Committing…' : 'Save & commit to all files'}
      </button>

      {status && <div className={`mt-2 text-[11px] ${status.ok ? 'text-emerald-600' : 'text-rose-500'}`}>{status.msg}</div>}
    </div>
  )
}

export default memo(TunableNode)
