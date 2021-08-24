module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '411px',
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        jolly: ['Jolly Lodger'],
        montserrat: ['Montserrat'],
        quicksand: ['Quicksand']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
