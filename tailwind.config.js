/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'light-primary':'#ffad00',
        'light-secondary': '#c7942a',
        'light-tertiary': '#f71b1b',
        'light-base': '#F1F1F1',
        'light-base2': '#737373',
        'dark-primary':'#ffad00',
        'dark-secondary': '#ffd57d',
        'dark-tertiary': '#fa0721',
        'dark-base': '#141f24',
        'dark-base2': '#c0c8cc',
      }
    },
  },
  plugins: [],
}
