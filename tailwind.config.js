/** @type {import('tailwindcss').Config} */

/* =============================================================================
 *  "WORKSHOP" WARM THEME
 *  The app was originally a dark slate/indigo theme. To reskin globally without
 *  rewriting every className, the colour families are remapped here:
 *    slate   → warm cream→brown, with the lightness INVERTED (slate-900 is now
 *              a light cream panel, slate-300 is dark brown body text) so the
 *              dark-theme class usage flips to a light/warm theme.
 *    indigo  → terracotta (primary accent / selection)
 *    emerald → forest green (the "green", darker per request)
 *    green   → forest green
 *    amber   → ochre/gold
 *    rose/red→ rust
 *    cyan    → muted sage
 * ========================================================================== */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // map surfaces
        canvas: '#e2ceb3', // map background (warm parchment/tan — NOT green)
        panel: '#dbc19c', // sidebars / panels
        paper: '#f1ead8', // editor / cards (light cream)
        ecru: '#cdb891', // interior cards / file-node bodies
        subarea: '#dbc19e', // folder/group rectangles on the map
        accent: '#9a5634', // terracotta
        edge: '#a99d7c', // hairlines / background dots

        // warm cream → brown, lightness inverted
        slate: {
          50: '#403626',
          100: '#493e2c',
          200: '#554935',
          300: '#62543d', // body text
          400: '#7b6b4e', // muted text
          500: '#92805f', // labels
          600: '#a99877', // dim
          700: '#c6b998', // borders
          800: '#dbd1b5', // chips / hover surface
          900: '#eae1c9', // panel surface
          950: '#f3ecda', // lightest
        },

        // terracotta (primary accent / selection)
        indigo: {
          200: '#d8b196',
          300: '#c99878',
          400: '#b97c58',
          500: '#a96740',
          600: '#985634',
          700: '#7d4526',
        },

        // forest green (darker green per request)
        emerald: {
          200: '#8aa78c',
          300: '#6c8d70',
          400: '#4c6e51',
          500: '#3c5a40',
          600: '#314b35',
        },
        green: {
          400: '#4c6e51',
          500: '#3c5a40',
          600: '#314b35',
        },

        // ochre / gold
        amber: {
          200: '#dcc079',
          300: '#cba055',
          400: '#bd8b3a',
          500: '#a87a2f',
        },

        // rust
        rose: { 400: '#b35a40', 500: '#a54a31', 600: '#8f3d28' },
        red: { 400: '#b35a40', 500: '#a54a31', 600: '#8f3d28' },

        // muted sage (was cyan)
        cyan: { 200: '#9cb39e', 300: '#7e9a82', 400: '#5f7d64', 500: '#4d6a52', 900: '#dfe6d8' },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        dashflow: {
          to: { strokeDashoffset: '-12' },
        },
      },
    },
  },
  plugins: [],
}
