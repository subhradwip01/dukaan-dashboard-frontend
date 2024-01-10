/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#146EB4",
        secondary: "#1E2640",
        secondary2: "#353C53",
        black: {
          12: "#1A181E",
          30: "#4D4D4D",
          60: "#999999",
          85: "#D9D9D9",
          90: "#E6E6E6",
          95: "#F2F2F2",
          100: "#FFFFFF"
        }
      }

    },
  },
  plugins: [],
}

