import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Using a relative base ('./') so the built site works when served from any
// subpath, including a GitHub Pages project URL like
// https://<user>.github.io/<repo>/.
export default defineConfig({
  base: './',
  plugins: [react()],
})
