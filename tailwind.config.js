module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'text': '0px 0px 7px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
