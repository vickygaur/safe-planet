import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/safe-planet/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_PHP_PROXY || 'http://localhost',
        changeOrigin: true,
        rewrite: (p) => `/safe-planet${p}`,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
