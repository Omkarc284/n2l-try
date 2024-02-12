/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      'md': '744px',
      // => @media (min-width: 744px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1440px',
      'xs': '100px' 
    },
    extend: {
        fontFamily: {
            'montserrat': ['Montserrat'],
            'lato': ['Lato'],
            'garamond': ['Garamond']
        }
    }
  },
  plugins: [],
})


