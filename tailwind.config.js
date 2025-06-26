/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#0F172A ',
        'secondary ': '#FF69B4 ',
        'textlight': '#FF69B4 ',
        'dark': '#0F172A ',
        'light': '#FF1493  ',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}