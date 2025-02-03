import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/bbvc/',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'trading': resolve(__dirname, 'trading.html'),
        'account-types': resolve(__dirname, 'account-types.html'),
        'forex-trading': resolve(__dirname, 'forex-trading.html'),
      },
    },
  },
})