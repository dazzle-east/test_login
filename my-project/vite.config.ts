import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwind(),
    tsconfigPaths(),
  ],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
