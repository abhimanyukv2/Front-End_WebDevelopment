/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html' ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './node_modules/@my-company/tailwind-components/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}