import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ntg/cockpit-shell': path.resolve(__dirname, '../../packages/cockpit-shell/src'),
      '@ntg/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
    },
  },
  server: {
    port: 8080,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
  },
})
