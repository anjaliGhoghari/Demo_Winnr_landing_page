/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
    center: true,
    screens: {
      DEFAULT: '1344px',    // 👈 new default width for large screens
    },
    padding: {
      DEFAULT: '96px',
      xs: '18px',
    },
  },
    extend: {
      screens: {
        xs: { max: "678px" },
        // xs: { max: "393px" },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '96px', 
          xs:'18px',
          // md: '96px',      
          // lg: '96px',    
          // xl: '96px',     
          // '2xl': '96px',   
        },
       
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
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

