/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        growShrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }, // Adjust scale to control growth
        },
      },
      animation: {
        'grow-shrink': 'growShrink 6s ease-in-out infinite',
      },
      colors: {
        mainColor: '#131920',
        mainColorTwo: '#0E1316',
        whitemainColor: '#3A4C61',
        qaymoqColor: '#D5C261'
      },
      screens: {
        sm: '365px',
        md: '765px',
        lg: '1054px',
        xl: '1365px',
      }
    },
  },
  plugins: [],
}