import { memo, useMemo } from 'react'
import { useStore, parseTunableVariables, getFileContent } from '../../store'

/* Tunable — a visual variant of the square/file object representing a tweakable
 * configuration value. */
function TunableNode({ id, data }) {
  const updateTunerVariableValue = useStore((s) => s.updateTunerVariableValue)
  const removeTunerVariable = useStore((s) => s.removeTunerVariable)
  const setSelectedTunableVariable = useStore((s) => s.setSelectedTunableVariable)
  const selected = useStore((s) => s.selectedTunableVariable)
  const removeTuner = useStore((s) => s.removeTuner)
  const supabaseLoading = useStore((s) => s.supabaseLoading)
  const fileEdits = useStore((s) => s.fileEdits)

  const hasEdits = useMemo(() => {
    const s = useStore.getState()
    if (s.fileEdits[data.fileId] !== undefined) return true
    for (const variable of data.variables || []) {
      const varName = variable.name
      for (const [fId, f] of Object.entries(s.projectFiles)) {
        if (f.kind !== 'text') continue
        if (s.fileEdits[fId] !== undefined) {
          const content = getFileContent(s, fId)
          const vars = parseTunableVariables(content, fId)
          if (vars.some((v) => v.name === varName)) return true
        }
      }
    }
    return false
  }, [fileEdits, data])

  const handleSave = async () => {
    const s = useStore.getState()
    const filesToSave = new Set()
    if (s.fileEdits[data.fileId] !== undefined) {
      filesToSave.add(data.fileId)
    }
    for (const variable of data.variables || []) {
      const varName = variable.name
      for (const [fId, f] of Object.entries(s.projectFiles)) {
        if (f.kind !== 'text') continue
        if (s.fileEdits[fId] !== undefined) {
          const content = getFileContent(s, fId)
          const vars = parseTunableVariables(content, fId)
          if (vars.some((v) => v.name === varName)) {
            filesToSave.add(fId)
          }
        }
      }
    }
    for (const fId of filesToSave) {
      await s.saveProjectFile(fId)
    }
  }

  return (
    <div className="flex min-h-[120px] w-[260px] flex-col rounded-2xl border border-cyan-500/50 bg-gradient-to-br from-cyan-900/35 to-slate-900/85 p-3 shadow-lg shadow-cyan-950/30 relative group">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          removeTuner(id)
        }}
        className="nodrag absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-[10px] text-slate-400 hover:border-cyan-500 hover:bg-slate-900 hover:text-cyan-400 transition-all z-10"
        title="Remove tuner"
      >
        ✕
      </button>

      <div className="flex items-center justify-between text-[10px] uppercase tracking-wide text-cyan-300/80 pr-5">
        <div className="flex items-center gap-1.5">
          <span>⚙</span>
          <span>tuner</span>
        </div>
        <div className="truncate font-mono text-[11px] text-slate-400 max-w-[120px]">{data.fileId}</div>
      </div>
      <div className="mt-2 truncate font-semibold text-slate-100 pr-5">{data.name}</div>
      <div className="mt-3 space-y-2">
        {data.variables?.map((variable) => {
          const isSelected = selected?.tunerId === id && selected?.variableId === variable.id
          return (
            <div key={variable.id} className="rounded-xl border border-slate-700/80 bg-slate-950/60 p-2">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTunableVariable(id, variable.id)}
                  className={`nodrag flex-1 rounded-lg border px-2 py-1 text-left text-[12px] ${isSelected ? 'border-cyan-400 bg-cyan-950/70 text-cyan-100' : 'border-slate-700 bg-slate-900/70 text-slate-200'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: variable.colorA }} />
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: variable.colorB }} />
                    <span className="truncate font-mono">{variable.name}</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => removeTunerVariable(id, variable.id)}
                  className="nodrag rounded-md border border-slate-700 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>
              <input
                value={variable.value}
                onChange={(event) => updateTunerVariableValue(id, variable.id, event.target.value)}
                className="nodrag mt-2 w-full rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[12px] text-slate-100 outline-none focus:border-cyan-500"
              />
            </div>
          )
        })}
      </div>

      {hasEdits && (
        <button
          type="button"
          onClick={handleSave}
          disabled={supabaseLoading}
          className="nodrag mt-3 w-full rounded-xl border border-cyan-500/60 bg-cyan-600/90 hover:bg-cyan-500 text-white text-[12px] font-semibold py-1.5 transition-colors shadow-md shadow-cyan-950/40 disabled:opacity-50"
        >
          {supabaseLoading ? 'Saving...' : '💾 Save Changes'}
        </button>
      )}
    </div>
  )
}

export default memo(TunableNode)
