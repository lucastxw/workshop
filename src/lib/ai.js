import Anthropic from '@anthropic-ai/sdk'

/* =============================================================================
 *  CLAUDE INTEGRATION  (single LLM call: summarise + explain one file)
 *
 *  ⚠️ Browser-direct, no backend: this prototype calls the Anthropic API from
 *  the browser with a user-supplied key (`dangerouslyAllowBrowser`). That key
 *  is exposed client-side — fine for local prototyping, NOT for production.
 *  In production, proxy these requests through a small server that holds the key.
 * ========================================================================== */

export const DEFAULT_MODEL = 'claude-opus-4-8'

export const AI_MODELS = [
  { id: 'claude-opus-4-8', label: 'Opus 4.8 · most capable' },
  { id: 'claude-sonnet-4-6', label: 'Sonnet 4.6 · balanced' },
  { id: 'claude-haiku-4-5', label: 'Haiku 4.5 · fastest' },
]

const SYSTEM = `You are a senior software engineer helping a developer understand an unfamiliar codebase one file at a time. Be accurate and concise — explain what is actually in the file, never invent APIs. Respond in GitHub-flavored Markdown using exactly these sections:

**Purpose** — one or two sentences on what this file is for.
**Key parts** — the main exports / functions / components and what each does (bullet list).
**Dependencies & data flow** — what it imports or relies on, and how data moves through it.
**Notes** — gotchas, side effects, or TODOs worth knowing. Omit this section entirely if there is nothing notable.

Do not restate the code verbatim or add a preamble. Start directly with the **Purpose** heading.`

/* Stream a file summary from Claude.
 *   onText(delta)  — called with each text chunk as it streams in
 *   signal         — optional AbortSignal to cancel
 * Returns the full summary text. */
export async function streamFileSummary({ apiKey, path, content, model = DEFAULT_MODEL, onText, signal }) {
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true })

  const params = {
    model,
    max_tokens: 8000, // streaming, so generous headroom; thinking shares this budget
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: `Summarise and explain this file.\n\nPath: ${path}\n\nSource:\n\n\`\`\`\n${content}\n\`\`\``,
      },
    ],
  }
  // Adaptive thinking on the models that support it (4.6+). Haiku 4.5 doesn't —
  // omit the field there to avoid a 400.
  if (!model.startsWith('claude-haiku')) {
    params.thinking = { type: 'adaptive' }
  }

  const stream = client.messages.stream(params, { signal })
  stream.on('text', (delta) => onText?.(delta))

  const final = await stream.finalMessage()
  return final.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
}

const threshold = 4 //TUNABLE

