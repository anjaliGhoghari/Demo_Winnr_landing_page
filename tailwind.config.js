/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
      },
      screens: {
        '3xl': '1600px', // optional: for bigger screens
      },
      container: {
        center: true,
        padding: '96px',
        screens: {
          sm: '1344px',
          md: '1344px',
          lg: '1344px',
          xl: '1344px',
          '2xl': '1344px',
        },

      },
      
      colors: {
        darkBg: '#060B0F',
        lightGray: '#737373',
        darkGreen: '#00220D',
        perrotGreen: '#5EFB7E',
        textGreen: '#103900',
      },

      fontFamily: {
        sf: ['SF Pro Rounded', 'sans-serif'],

      },

    },
  },
  plugins: [],
}

