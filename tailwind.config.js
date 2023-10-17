/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#FD33B9",
        secondary: {
          50:"#110B20",
          100: "#150E28",
          200: "#903AFF",
          300: "#D434FE",
          400:"rgb(212,52,214,0.1)",
          500:"rgb(144,58,255,0.1)"
        },
      },
      width:{
        100:"55%"
      },
      height:{
        100:"600px"
      },
      
      
    },
  },
  plugins: [],
}

