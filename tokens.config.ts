import { defineTheme } from 'pinceau'

export default defineTheme({
  text: {
    base: {
      fontSize: '1.2rem'
    },

    lg: {
      fontSize: '1.15rem'
    }
  },

  elements: {
    container: {
      maxWidth: '66rem'
    }
  },

  prose: {
    li: {
      margin: '0.6rem 0'
    },

    table: {
      margin: '20px 0'
    }
  },

  alpine: {
    body: {
      backgroundColor: {
        initial: '#fcf6e8',
        dark: '#2f2c2e'
      },

      color: {
        initial: '#2f2c2e',
        dark: '#fcf6e8'
      }
    }
  }
})