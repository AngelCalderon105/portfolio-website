/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Amiri']
      },
      colors: {
        'custom-blue': '#251d73',
        'dark-blue' : '#253368',
        'light-blue': '#0a6dbf'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        'float-image': 'float 2.8s ease-in-out infinite',
        'float1': 'float 3s ease-in-out infinite',
        'float2': 'float 6s ease-in-out infinite',
        'float3': 'float 5s ease-in-out infinite',
      },
      
      
    },
  },
  plugins: [],
}

