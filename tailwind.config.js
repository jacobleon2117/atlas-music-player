/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Add ts and tsx
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-light": "#e7eddf",
        "primary-sage": "#98A990",
        "primary-dark": "#1F1F22",
        "custom-slate": "#64748B",
        "slider-bg": "#D5D7D8",
        "playlist-text-color": "#94A3B8",
        "playlist-highlight": "#F1F5F9",
      },
    },
  },
  plugins: [],
};
