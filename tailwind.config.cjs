/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        myYellow: '#dc8c00',
        myGreen: '#003300',
      },
      keyframes: {
        slideLeft: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 250ms ease-in-out',
      },
    },
  },
  plugins: [],
};
