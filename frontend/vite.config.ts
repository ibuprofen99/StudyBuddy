import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build:{
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        // chunkFileNames: 'assets/js/[name]-[hash].js', // Optional: Control the output of code chunks
        // entryFileNames: 'assets/js/[name]-[hash].js', // Optional: Control the output of entry points
      },
    },
  }
})
