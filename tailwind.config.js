/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'hsl(212, 21%, 14%)',
        grey: 'hsl(228, 12%, 48%)', 
        cream: 'hsl(30, 38%, 92%)',
        white: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

