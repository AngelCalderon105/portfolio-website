/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        'float-image': 'float 2.8s ease-in-out infinite',
        'float-words': 'float 2.8s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}

