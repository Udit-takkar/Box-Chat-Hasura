// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF-Pro", "sans-serif"],
      },
      colors: {
        btn: "#c850c0",
        darkBlack: "#0A0B0C",
        // darkBlack: "#171616",
        bgBlack: "#171616",
        bkg: "#E5E7ED",
        teal: colors.teal,
        cyan: colors.cyan,
      },
      height: {
        almost: "46rem",
        200: "200px",
      },
      width: {
        300: "300px",
      },
      fontWeight: {
        light: 100,
        medium: 400,
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "1/3": "33%",
        forty: "40%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
