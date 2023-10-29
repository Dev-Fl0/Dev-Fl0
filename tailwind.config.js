/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/styles/index.tailwind.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      backgroundColor: {
        main: "#282c34"
      },
    },
  },
  plugins: [],
}

