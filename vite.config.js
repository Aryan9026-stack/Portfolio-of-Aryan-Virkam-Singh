import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths working on GitHub Pages, Netlify and Vercel.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 900 },
})
