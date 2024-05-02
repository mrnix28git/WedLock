/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        Glory: ['"Glory"','sans-serif'],
        Jomh: ['"Jomhuria"','serif'],
      },
    },
  },
  plugins: [],
}

