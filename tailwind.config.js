/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flag-blue': '#142A91',
        'box-gray': '#f1f5f9',
        'flag-red': '#730d20',
        'flag-yellow': '#bc9547',
      },
    },
  },
  plugins: [],
}
