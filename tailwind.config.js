/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGradientStart: "hsl(6, 100%, 80%)",
        primaryGradientEnd: "hsl(335, 100%, 65%)",
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
