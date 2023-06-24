/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lotto-green': '#A5D9C8',
        'lotto-yellow': '#F6F0C6',
        'lotto-gray': '#E9F5F1'
      },
      dropShadow: {
        'lotto': '0 0 6px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}