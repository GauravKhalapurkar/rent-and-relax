/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffb703",
        light_blue: "#43a9c0",
        blue: "#023047",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
