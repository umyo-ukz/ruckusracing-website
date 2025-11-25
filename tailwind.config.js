/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'racing-purple': '#6a0dad',
        'purple-dark': '#4b0082',
        'purple-light': '#8a2be2',
        'racing-black': '#000000',
        'racing-gray': '#1a1a1a',
      },
      fontFamily: {
        'racing': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}