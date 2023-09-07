/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '280px',
      // md: '768px',
      md: '880px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        burtons: "burtons"
      }
    },
  },
  plugins: [],
}
