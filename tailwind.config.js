/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", "serif"],
        cherry: ["Cherry Swash", "serif"],
      },
    },
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
