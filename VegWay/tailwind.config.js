/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ce5646ff",
        pink: "#ff7980ff",
        salmon: "#fea676",
        yellow: "rgba(244, 179, 17, 1)",
        orange: "#f36d2e",
        blue: "#4a789a",
        darkblue: "#496d69",
        green: "#748d32",
        dark: "#0d1a24ff",
        darkbluet: "#16232eff",
      },
    },
  },
  plugins: [],
};
