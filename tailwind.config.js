/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './public/index.html',
  './src/**/*.{html,js}',],
  theme: {
    extend: {
      colors:{
        'primary':{
          pale: '#e0e8ff',
          brightblue: '#3829e0',
        },
        'neutral':{
          verypale: '#f5f7ff',
          coolblue: '#7280a7',
          darkyblue:'#1f2f56',
        }
      },
      fontFamily:{
        body:['Red Hat Display']
      },
    },
  },
  plugins: [],
}

