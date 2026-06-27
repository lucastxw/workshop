import { useMemo, useRef, useState } from 'react'
import { useStore } from '../store'
import { kindOf } from '../projectGraph'
import { supabase } from '../lib/supabase'

/* File Explorer (top-left). Mode-aware:
 *   • Project mode  → lists the REAL directory; click selects + focuses the file
 *     on the map (revealing its dependency arrows).
 *   • Functions mode → lists the mock files; click highlights + frames the file.
 * Files are grouped by their folder path. */
export default function FileExplorer() {
  const viewMode = useStore((s) => s.viewMode)
  const isProject = viewMode === 'project'

  const [showGuide, setShowGuide] = useState(false)
  const supabaseLoading = useStore((s) => s.supabaseLoading)
  const supabaseError = useStore((s) => s.supabaseError)

  // function-mode data
  const files = useStore((s) => s.files)
  const functions = useStore((s) => s.functions)
  const focusedFileId = useStore((s) => s.focusedFileId)
  const focusFile = useStore((s) => s.focusFile)
  const openTerminal = useStore((s) => s.openTerminal)

  // project-mode data
  const projectFiles = useStore((s) => s.projectFiles)
  const selectedProjectFileId = useStore((s) => s.selectedProjectFileId)
  const selectProjectFile = useStore((s) => s.selectProjectFile)
  const requestFocus = useStore((s) => s.requestFocus)
  const projectFolderFilter = useStore((s) => s.projectFolderFilter)
  const setProjectFolderFilter = useStore((s) => s.setProjectFolderFilter)
  const clearProjectFolderFilter = useStore((s) => s.clearProjectFolderFilter)
  const deleteProjectFile = useStore((s) => s.deleteProjectFile)
  const addProjectFiles = useStore((s) => s.addProjectFiles)
  const fileInputRef = useRef(null)

  const source = isProject ? projectFiles : files

  const grouped = useMemo(() => {
    const g = {}
    for (const f of Object.values(source)) {
      const key = isProject ? f.folder : f.folderPath
      if (isProject && projectFolderFilter && key !== projectFolderFilter) continue
      ;(g[key] ||= []).push(f)
    }
    return Object.entries(g).sort(([a], [b]) => a.localeCompare(b))
  }, [source, isProject, projectFolderFilter])

  const visibleCount = grouped.reduce((sum, [, list]) => sum + list.length, 0)
  const fnCount = (fileId) => Object.values(functions).filter((f) => f.fileId === fileId).length

  const onPick = (f) => {
    if (isProject) {
      selectProjectFile(f.id)
      requestFocus(f.id)
    } else {
      focusFile(f.id)
    }
  }

  const handleImport = async (event) => {
    const filesToImport = Array.from(event.target.files || [])
    if (filesToImport.length === 0) return

    const imported = await Promise.all(
      filesToImport.map(async (file) => {
        const path = file.webkitRelativePath ? `/${file.webkitRelativePath}` : `/${file.name}`
        const folder = path.slice(0, path.lastIndexOf('/')) || '/'
        const kind = kindOf(file.name)

        if (kind === 'image' || kind === 'audio') {
          return { path, name: file.name, folder, kind, url: URL.createObjectURL(file), rawFile: file }
        }

        const source = await file.text()
        return { path, name: file.name, folder, kind, source }
      }),
    )

    addProjectFiles(imported)
    event.target.value = ''
  }

  const clearFolderFilter = () => clearProjectFolderFilter()
  const deleteFile = () => selectedProjectFileId && deleteProjectFile(selectedProjectFileId)

  return (
    <div className="flex h-full flex-col bg-panel">
      <Header
        title="File Explorer"
        badge={visibleCount}
        action={
          <div className="flex items-center gap-2">
            {projectFolderFilter ? (
              <button
                type="button"
                onClick={clearFolderFilter}
                className="rounded-full border border-rose-500 bg-rose-600/90 px-3 py-1 text-[11px] font-medium text-white transition hover:bg-rose-500"
              >
                Clear filter
              </button>
            ) : null}
            {selectedProjectFileId ? (
              <button
                type="button"
                onClick={deleteFile}
                className="rounded-full border border-red-500 bg-red-600/90 px-3 py-1 text-[11px] font-medium text-white transition hover:bg-red-500"
              >
                Delete
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1 text-[11px] font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Import files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              webkitdirectory=""
              directory=""
              className="hidden"
              onChange={handleImport}
            />
          </div>
        }
      />
      <div className="thin-scroll flex-1 overflow-auto py-1">
        {grouped.map(([folder, list]) => (
          <div key={folder} className="mb-1">
            <button
              type="button"
              onClick={() => setProjectFolderFilter(projectFolderFilter === folder ? null : folder)}
              className={[
                'flex w-full items-center justify-between gap-1.5 px-3 py-1 text-left text-[11px] transition',
                projectFolderFilter === folder ? 'bg-slate-800 text-slate-100' : 'text-slate-500 hover:bg-slate-900/80',
              ].join(' ')}
            >
              <span className="flex items-center gap-1.5">
                <span>▾</span>
                <span className="truncate font-mono">{folder || '/'}</span>
              </span>
              <span className="text-[10px] text-slate-400">{list.length} files</span>
            </button>
            {list.map((f) => {
              const active = isProject ? selectedProjectFileId === f.id : focusedFileId === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => onPick(f)}
                  onDoubleClick={() => !isProject && openTerminal(f.id)}
                  className={[
                    'group flex w-full items-center gap-2 py-1 pl-7 pr-3 text-left text-[13px] transition-colors',
                    active
                      ? isProject
                        ? 'bg-indigo-500/15 text-indigo-200'
                        : 'bg-amber-500/15 text-amber-200'
                      : 'text-slate-300 hover:bg-slate-800/60',
                  ].join(' ')}
                >
                  <span className={active ? (isProject ? 'text-indigo-400' : 'text-amber-400') : 'text-slate-500'}>▢</span>
                  <span className="flex-1 truncate font-mono">{f.name}</span>
                  {!isProject && (
                    <span className="rounded bg-slate-800 px-1.5 text-[10px] text-slate-400 group-hover:bg-slate-700">{fnCount(f.id)}</span>
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {/* Supabase Guide Panel */}
      {showGuide && (
        <div className="thin-scroll border-t border-slate-800 bg-slate-950 p-3 text-[11px] leading-relaxed text-slate-400 max-h-[60%] overflow-y-auto">
          <h4 className="font-semibold text-slate-200 mb-1.5 uppercase tracking-wider text-[10px]">Supabase Setup Instructions</h4>
          <ol className="list-decimal pl-4 space-y-1.5">
            <li>
              <strong>Create Project:</strong> Sign in to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">supabase.com</a> and create a new project.
            </li>
            <li>
              <strong>Get Keys:</strong> Copy the <strong>Project URL</strong> and <strong>Anon Key</strong> from <em>Project Settings &gt; API</em>.
            </li>
            <li>
              <strong>Environment File:</strong> Create a <code className="bg-slate-800 px-1 py-0.5 rounded font-mono text-[10px] text-slate-200">.env</code> file in the repository root and add:
              <pre className="mt-1 bg-slate-900 p-1.5 rounded font-mono text-[9.5px] text-indigo-300 overflow-x-auto select-all">
{`VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key`}
              </pre>
            </li>
            <li>
              <strong>Run SQL:</strong> Open the <strong>SQL Editor</strong> in Supabase, create a new query, paste this, and click run:
              <pre className="mt-1 bg-slate-900 p-1.5 rounded font-mono text-[9.5px] text-indigo-300 overflow-x-auto max-h-32 overflow-y-auto select-all">
{`create table if not exists public.project_files (
  id text primary key,
  path text unique not null,
  name text not null,
  folder text not null,
  kind text not null,
  url text,
  source text,
  position jsonb default '{"x":0,"y":0}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.project_files enable row level security;

create policy "Allow public read access" on public.project_files for select using (true);
create policy "Allow public insert access" on public.project_files for insert with check (true);
create policy "Allow public update access" on public.project_files for update using (true);
create policy "Allow public delete access" on public.project_files for delete using (true);`}
              </pre>
            </li>
            <li>
              <strong>Storage Bucket:</strong> Go to <strong>Storage</strong>, create a public bucket named <code className="bg-slate-800 px-1 py-0.5 rounded font-mono text-[10px] text-slate-200">files-bucket</code>, and add policies to allow upload/delete for all.
            </li>
          </ol>
          <div className="mt-2.5 pt-2 border-t border-slate-900 text-slate-500 text-[10px]">
            * Note: If you configure `.env`, please restart the Vite development server to load the new variables.
          </div>
        </div>
      )}

      {/* Supabase status footer */}
      <div className="border-t border-slate-800 bg-slate-900/60 p-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${supabase ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${supabase ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              {supabase ? 'Supabase Connected' : 'Local Fallback Mode'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300 hover:bg-slate-700 transition"
          >
            {showGuide ? 'Hide Guide' : 'Setup Guide'}
          </button>
        </div>
        
        {supabaseLoading && (
          <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-indigo-400 font-mono">
            <span className="h-3 w-3 animate-spin border border-t-transparent border-indigo-400 rounded-full" />
            Syncing with Supabase...
          </div>
        )}

        {supabaseError && (
          <div className="mt-1.5 text-[10px] text-rose-400 font-mono break-all bg-rose-950/20 p-1.5 rounded border border-rose-900/30">
            Error: {supabaseError}
          </div>
        )}
      </div>
    </div>
  )
}

export function Header({ title, badge, action }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
      <div className="flex items-center gap-2">
        <h2 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{title}</h2>
        {badge != null && <span className="rounded-full bg-slate-800 px-1.5 text-[10px] text-slate-400">{badge}</span>}
      </div>
      {action}
    </div>
  )
}
