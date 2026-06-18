import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chisiamo: resolve(__dirname, 'chi-siamo.html'),
        giochi: resolve(__dirname, 'giochi.html'),
        carte: resolve(__dirname, 'carte.html'),
        eventi: resolve(__dirname, 'eventi.html'),
      }
    }
  }
})
