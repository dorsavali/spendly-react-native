/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2E8B57",
        secondary: "#1F4D3A",
        accent: "#D4A017",
        background: "#F7F3EA",
        surface: "#E8DFCF",
        danger: "#bb2124",
        success: "#22bb33",
        "text-primary": "#2B2B2B",
        "text-secondary": "#6B705C",
      },
      fontFamily: {
        "poppins-light": ["Poppins_300Light"],
        poppins: ["Poppins_400Regular"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
        "poppins-black": ["Poppins_900Black"],
      },
    },
  },
};
