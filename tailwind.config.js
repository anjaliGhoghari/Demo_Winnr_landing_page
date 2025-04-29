/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkBg: '#060B0F',
        lightGray: '#737373',
        darkGreen :'#00220D',
        perrotGreen:'#5EFB7E',
        textGreen:'#103900',
        },

        fontFamily: {
        sf: ['SF Pro Rounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

