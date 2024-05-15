import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'remark'],
    },
    commonjsOptions: {
      strictRequires: true,
    },
  },
})
