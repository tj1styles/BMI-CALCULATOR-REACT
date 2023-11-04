/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: { max: "679px" },
      md: "680px",
      lg: "1034px",
      xl: "1336px",
      "2xl": "2000px",
    },
    extend: {
      colors: {
        shadowColor: "rgb(238,241,246)",
      },
      boxShadow: {
        "3xl": " 1.2vw 1.3vw 2vw 0vw",
        inputSm: "0vw 0vw 0.1vw 0.3vw",
      },
    },
  },
  plugins: [],
};
