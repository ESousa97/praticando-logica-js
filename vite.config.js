import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false // Desabilita overlay de erro para melhor experiência
    }
  }
})
