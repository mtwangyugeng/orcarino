import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/orcarino/',
  plugins: [svelte()],
  resolve: {
    alias: {
      $src: path.resolve('./src')
    }
  },
})
