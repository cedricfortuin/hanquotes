const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'han': '#e5005b'
      },
      fontFamily: {
        'sans': ['Avenir', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
