/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
        lato: ["'Lato'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
