import { memo } from 'react'
import { useStore } from '../../store'

/* A function/component declared inside the selected file. Appears as a pill
 * popping out beside the file. Clicking it opens the editor and jumps to the
 * function's line of code. */
function ProjectFunctionNode({ data }) {
  const openEditor = useStore((s) => s.openEditor)
  const scrollEditorToLine = useStore((s) => s.scrollEditorToLine)

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        openEditor(data.fileId)
        scrollEditorToLine(data.path, data.line, data.endLine)
      }}
      title={`Go to line ${data.line}`}
      className="nodrag flex cursor-pointer items-center gap-2 rounded-full border border-indigo-500/50 bg-slate-900/95 px-3 py-1 text-[11px] text-indigo-100 shadow-lg transition-colors hover:border-indigo-400 hover:bg-indigo-600/30"
      style={{ width: 184 }}
    >
      <span className="text-indigo-400">ƒ</span>
      <span className="flex-1 truncate font-mono">{data.name}</span>
      <span className="text-[9px] text-slate-500">:{data.line}</span>
    </div>
  )
}

export default memo(ProjectFunctionNode)
