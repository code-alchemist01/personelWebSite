/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#64ffda',
        tertiary: '#112240',
        quaternary: '#233554',
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}