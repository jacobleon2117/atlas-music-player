/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-slate": "#64748B",
        "slider-bg": "#D5D7D8",
      },
    },
  },
  plugins: [],
};
