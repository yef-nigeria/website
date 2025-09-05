/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      blue: {
        100: "#EBF4FB",
        200: "#B0D1ED",
        300: "#61A4DC",
        400: "#398DD3",
        500: "#2E71A9",
        600: "#22557F",
      },
      gray: {
        100: "#F2F2F2",
        200: "#CCCCCC",
        300: "#979797",
        400: "#666666",
        500: "#333333",
        600: "#212121",
      },
      brown: {
        100: "#FBF2EB",
        200: "#EDCCB0",
        300: "#E0A574",
        400: "#D37F39",
        500: "#7F4C22",
        600: "#2A190B",
      },
    },
    fontFamily: {
      sat: ["Satoshi", ...fontFamily.sans],
      cab: ["CabinetGrotesk", ...fontFamily.sans],
    },
  },
  plugins: [],
};
