/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#4ADE80",
      white: "#FFFFFF",
      lightGray: "#D1D5DB",
      gray: "#333333",
      black: "#000000",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-home": "url('../public/img/background_acceuil.jpg')",
        "hero-desktop": "url('../public/img/background_dekstop.jpg')",
        "hero-tablette": "url('../public/img/background_tablette.jpg')",
        "hero-mobile": "url('../public/img/background_mobile.jpg')",
      },
    },
  },
  plugins: [],
};
