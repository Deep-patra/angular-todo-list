/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customWhite: "#f5f6fa",
        peterRiver: "#3498db",
        darkCardBackground: "#353b48",
      }
    },
  },
  plugins: [],
}
