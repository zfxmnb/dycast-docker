import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'chrome68',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // host: '0.0.0.0',
    proxy: {
      '/dy': {
        target: 'https://live.douyin.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dy/, '')
      }
    }
  }
});
