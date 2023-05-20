const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "sans": ["var(--inter-font)", ...defaultTheme.fontFamily.sans],
      "serif": ["var(--source-font)" ,...defaultTheme.fontFamily.serif]
    },
    extend: {
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
