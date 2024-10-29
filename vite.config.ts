import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://pdai-group-12.github.io/frontend',
    plugins: [react()],
})
