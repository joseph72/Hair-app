module.exports = {
  purge: [
    './apps/**/*.html',
    './apps/**/*.ts',
     './libs/**/*.js',
     './libs/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      screens: {

        'xs': {'max': '639px'},
        'lg': '1024px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
