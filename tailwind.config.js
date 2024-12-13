/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          500: '#c2fe0c',
          400: '#d1fe3f',
        }
      }
    },
  },
  plugins: [],
}