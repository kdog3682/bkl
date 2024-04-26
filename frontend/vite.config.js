import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const url = fileURLToPath(new URL('./src', import.meta.url))
export default defineConfig({
  plugins: [
    Vue(),
    Components(),
    AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dirs: ['./composables'],
    })
  ],
  resolve: {
    alias: {
      '@': url,
      '~': url
    }
  },
  base: '/bkl/',
})
