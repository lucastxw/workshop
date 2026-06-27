import puppeteer from 'puppeteer-core'

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const URL = 'http://localhost:5174/'
const OUT = 'C:/Users/tzeaa/AppData/Local/Temp/claude/c--Users-tzeaa-ProjectBlueprint-ProjectBlueprint/83407e9c-4d9c-4f47-94c2-b30449a3b14c/scratchpad'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--window-size=1440,900'], defaultViewport: { width: 1440, height: 900 } })
const page = await browser.newPage()
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()) })
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 })
await page.waitForSelector('.react-flow__node-projectFile', { timeout: 15000 })
await sleep(800)
await page.screenshot({ path: OUT + '/01-initial.png' })

// Find and click the file node containing 'store.js' (has several functions)
const clicked = await page.evaluate(() => {
  const nodes = [...document.querySelectorAll('.react-flow__node-projectFile')]
  const target = nodes.find((n) => n.textContent.includes('store.js')) || nodes[0]
  if (!target) return null
  const r = target.getBoundingClientRect()
  return { x: r.x + r.width / 2, y: r.y + r.height / 2, name: target.textContent.slice(0, 40) }
})
console.log('clicking file node:', clicked)
await page.mouse.click(clicked.x, clicked.y)
await sleep(900)
await page.screenshot({ path: OUT + '/02-file-clicked.png' })

// Is the editor open? Find the jump-to-function select inside the floating editor.
const hasEditor = await page.evaluate(() => !!document.querySelector('.fixed.z-50'))
console.log('editor open:', hasEditor)

// Use the in-editor "Jump to..." dropdown — pick the 3rd function if available.
const sel = await page.evaluate(() => {
  const s = document.querySelector('.fixed.z-50 select')
  if (!s) return { found: false }
  const opts = [...s.options].map((o) => o.textContent)
  return { found: true, count: s.options.length, opts }
})
console.log('dropdown:', JSON.stringify(sel))

if (sel.found && sel.count > 2) {
  await page.evaluate(() => {
    const s = document.querySelector('.fixed.z-50 select')
    s.value = '2'
    s.dispatchEvent(new Event('change', { bubbles: true }))
  })
  await sleep(800)
  await page.screenshot({ path: OUT + '/03-jumped-dropdown.png' })
}

// Now try clicking a function PILL on the canvas (projectFunction node)
const pill = await page.evaluate(() => {
  const pills = [...document.querySelectorAll('.react-flow__node-projectFunction')]
  if (pills.length === 0) return { count: 0 }
  const r = pills[Math.min(2, pills.length - 1)].getBoundingClientRect()
  return { count: pills.length, x: r.x + r.width / 2, y: r.y + r.height / 2, text: pills[Math.min(2, pills.length - 1)].textContent }
})
console.log('pills:', JSON.stringify(pill))
if (pill.count > 0) {
  await page.mouse.click(pill.x, pill.y)
  await sleep(800)
  await page.screenshot({ path: OUT + '/04-pill-clicked.png' })
}

console.log('ERRORS:', errors.length ? errors.join('\n') : 'none')
await browser.close()
