/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F2', ink: '#2E2A45', muted: '#5F5A78',
        lavender: '#DCD3F5', powder: '#CFE3F7', peach: '#FADCC9', blush: '#F7D3E0', mint: '#CDEBDD',
        accent: '#6F5CC9',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } } },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
