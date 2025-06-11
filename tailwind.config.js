/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#15803d", // changed from blue (#0F4C81) to green (#15803d)
        secondary: "#3A7CA5",
        accent: "#F39C12",
        light: "#F5F5F5",
        dark: "#333333",
      },
    },
  },
  plugins: [],
}
