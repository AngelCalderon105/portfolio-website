/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Amiri']
      },
      colors: {
        'custom-blue': '#251d73'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'float-image': 'float 4s ease-in-out infinite',
        'float-words': 'float 5s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}

