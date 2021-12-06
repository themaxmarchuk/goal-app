module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        purple: {
          dark: '#5E35B1',
          base: '#B388FF',
          light: '#C0CAF5'
        },
        blue: {
          dark: '#1B1F38',
          base: '#5A67A1'
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
