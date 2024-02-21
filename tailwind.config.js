/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0089FF",
        white: "#FFFFFF",
        state : {
          primary:{
            main: "#1041B7",
            surface: "#E7ECF8",
          }
        },
      },
    },
  },
  plugins: [],
};

