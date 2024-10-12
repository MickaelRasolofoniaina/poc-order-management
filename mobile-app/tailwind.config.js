/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      primary: {
        100: "#f0f9ff",
        200: "#e0f2fe",
        300: "#bae6fd",
        400: "#7dd3fc",
        500: "#38bdf8",
        600: "#0ea5e9",
        700: "#0284c7",
        800: "#0369a1",
        900: "#075985",
      },
      secondary: {
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#252f3f",
        900: "#161e2e",
      }
    }
  },
  plugins: [],
}

