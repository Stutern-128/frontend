/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        primary: '#09856F',
      }
    },
  },
  plugins: [],
}

