/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
          '100%': { transform: 'translateY(0)' },


        }
      },
      screens: {
        '2sm': { 'max': '1275px' },
        'smm': {'min': '375px'},
        'tablet': {'min': '640px'},
        'laptop': {'min': '1024px'},
        'phoneMax': {'max': '400px'}
        
      }
    },
  },
  plugins: [],
}

