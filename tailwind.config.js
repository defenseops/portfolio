/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070711',
          900: '#0d0d1a',
          800: '#12122a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      gridTemplateColumns: {
        'hero': '1fr 420px',
      },
    },
  },
  plugins: [],
}
