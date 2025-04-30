/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
      '3xl': '1600px', // optional: for bigger screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '96px',
      }
    },
    maxWidth: {
      '1440': '1440px',
    },
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

