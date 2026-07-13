/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#588f27",
          dark: "#3f6b1a",
          deep: "#2d4d12",
          soft: "#e8f0dc",
          mist: "#f3f7ec",
        },
        ink: "#141810",
        muted: "#5a6350",
        line: "#c5d4ae",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
