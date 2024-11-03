import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      constants: '/src/constants',
      services: '/src/services',
      store: '/src/store',
      tests: '/src/tests',
      types: '/src/types',
    },
  },
})
