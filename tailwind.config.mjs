 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover:  '#2a0041',
            darkThere: '#11001F',
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        }
      },
    },
    plugins: [],
  }