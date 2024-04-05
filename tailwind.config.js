/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans- serif"
      }
    },
  },
  daisyui: {
    themes: ["light", "synthwave", "cupcake"],
  },
  plugins: [require("daisyui")],
}