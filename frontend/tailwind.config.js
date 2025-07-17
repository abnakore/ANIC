/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all React files
  ],
  theme: {
    extend: {
      colors: {
        // ANIC Color Palette
        green: {
          islamic: "#0B3B2E",
          dark: "#073227",
          success: "#388E3C",
        },
        gold: {
          DEFAULT: "#C8A450",
          light: "#E2C78A",
        },
        cream: "#F9F7F1",
        black: {
          rich: "#1A1A1A",
        },
        // Functional colors
        error: "#D32F2F",
        link: "#1976D2",
      },
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"], // Example font
        arabic: ["'Amiri'", "serif"], // For Arabic text
      },
    },
  },
  plugins: [],
};
