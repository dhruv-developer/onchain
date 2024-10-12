/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-primary': '#0052ff',
        'base-secondary': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
