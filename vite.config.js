import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// change 
export default defineConfig({
  base: '/weatherNewsReact/', 
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']], 
      },
    }),
  ],
})