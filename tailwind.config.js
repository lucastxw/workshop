/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0b0e14',
        panel: '#11151f',
        edge: '#1e2533',
        accent: '#6366f1',
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
