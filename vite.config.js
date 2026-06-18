import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        giochi: resolve(__dirname, 'giochi.html'),
        cardmarketshop: resolve(__dirname, 'cardmarketshop.html'),
        eventi: resolve(__dirname, 'eventi.html'),
        eventi2: resolve(__dirname, 'eventi2.html'),
        paginavuota: resolve(__dirname, 'paginavuota.html'),
      }
    }
  }
})
