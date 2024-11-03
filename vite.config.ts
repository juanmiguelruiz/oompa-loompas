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
      containers: '/src/containers',
      hooks: '/src/hooks',
      services: '/src/services',
      store: '/src/store',
      tests: '/src/tests',
      types: '/src/types',
    },
  },
})
