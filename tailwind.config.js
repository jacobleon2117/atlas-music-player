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
        "playlist-text-color": "#94A3B8",
        "playlist-highlight-color": "#F1F5F9",
      },
    },
  },
  plugins: [],
};
