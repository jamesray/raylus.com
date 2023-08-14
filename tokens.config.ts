import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      backgroundColor: {
        initial: '#fcf6e8',
        dark: '#0c0c0d'
      },

      color: {
        initial: '#2f2c2e',
        dark: '#fcf6e8'
      }
    },

    readableLine: '64ch'
  },

  prose: {
    p: {
      fontSize: '20px',
      margin: '1.8rem auto'
    },

    h5: {
      margin: '3rem 0 10',
      fontSize: '24px',
      fontWeight: '700'
    },

    hr: {
      margin: '14px 0',
      style: 'dotted',
      width: '6px',

      color: {
        initial: '#a1a1aa',
        dark: 'var(--color-gray-600)'
      }
    },

    table: {
      fontSize: '16px'
    }
  }
})