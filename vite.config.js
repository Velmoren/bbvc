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
        'ndd-execution': resolve(__dirname, 'ndd-execution.html'),
        'economic-calendar': resolve(__dirname, 'economic-calendar.html'),
        'payment-methods': resolve(__dirname, 'payment-methods.html'),
        'credit-rating': resolve(__dirname, 'credit-rating.html'),
        'about': resolve(__dirname, 'about.html'),
        'trading-tools': resolve(__dirname, 'trading-tools.html'),
        'market-analysis': resolve(__dirname, 'market-analysis.html'),
        'contacts': resolve(__dirname, 'contacts.html'),
        'register': resolve(__dirname, 'register.html'),
      },
    },
  },
})