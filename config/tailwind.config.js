module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.html'
  ],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        purple: {
          dark: '#5E35B1',
          DEFAULT: '#B388FF',
        },
        blue: {
          dark: '#1B1F38',
          DEFAULT: '#5A67A1',
          base: '#353D6E',
          light: '#C0CAF5'
        },
        magenta: { 
          bright: '#FF4284'
        },
        green: {
          bright: '#1DE9B6'
        } 
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
