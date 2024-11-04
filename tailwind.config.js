/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#0097ff",
        "primary-content": "#000816",
        secondary: "#549900",
        "secondary-content": "#020800",
        accent: "#2f4bff",
        "accent-content": "#d0dfff",
        neutral: "#2b2e33",
        "neutral-content": "#d0d1d2",
        "base-100": "#2a2621",
        "base-200": "#23201b",
        "base-300": "#1c1916",
        "base-content": "#d0cfcd",
        info: "#00e4ff",
        "info-content": "#001216",
        success: "#64eb7e",
        "success-content": "#031305",
        warning: "#cf8b00",
        "warning-content": "#100700",
        error: "#d3003f",
        "error-content": "#fdd6d7",
      },
      fontFamily: {
        sans: ["Comfortaa", "montserrat"],
        comfortaa: ["Comfortaa"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
