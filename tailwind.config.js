/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07090C',
        panel: '#0B0F14',
        accent: '#1B7CFF',
        accentHover: '#5AA2FF',
        body: '#C9CFD8',
        muted: '#8A93A1',
        muted2: '#8C95A3',
        soft: '#B3BCC8',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
