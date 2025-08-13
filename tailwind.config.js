/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7e6',
          100: '#ffedcc',
          500: '#f59e0b',
          600: '#d97706'
        }
      }
    },
  },
  plugins: []
}
