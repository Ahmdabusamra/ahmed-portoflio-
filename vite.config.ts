import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Vite config to ensure proper building
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias the src directory
    },
  },
  build: {
    outDir: 'dist', // Specify the output directory for production build
  },
})

