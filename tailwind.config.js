const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'heading': ['BiennaleBold', ...defaultTheme.fontFamily.sans],
        'subheading': ['BiennaleMedium', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}

