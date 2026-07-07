/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',   // ← ye line add karo

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
}