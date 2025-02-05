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
        'futures-trading': resolve(__dirname, 'futures-trading.html'),
        'spot-indices': resolve(__dirname, 'spot-indices.html'),
        'shares-and-stocks': resolve(__dirname, 'shares-and-stocks.html'),
        'precious-metals': resolve(__dirname, 'precious-metals.html'),
        'cfds-on-energy': resolve(__dirname, 'cfds-on-energy.html'),
      },
    },
  },
})