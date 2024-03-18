/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", "serif"],
        cherry: ["Cherry Swash", "serif"],
      },
    },
  },
  plugins: [],
};
