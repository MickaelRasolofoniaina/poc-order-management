/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: {
        100: "#23303B",
      },
      grey: {
        100: "#8E949A",
        200: "#A4A9AE",
        300: "#A3A8AC",
        400: "#F1F2F3",
      },
      green: {
        100: "#13C999",
      },
      red: {
        100: "#FF6363",
        200: "#E73726",
      },
      white: {
        100: "#FFFFFF",
      },
      blue: {
        100: "#456EFE",
      },
    },
    fontFamily: {
      Inter400: "inter-400",
      Inter500: "inter-500",
      Inter600: "inter-600",
      Inter700: "inter-700",
      Inter800: "inter-800",
    },
  },
  plugins: [],
};
