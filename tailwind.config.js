/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appBlue: "#CEDFE6",
        appDarkBlue: "#3A6D83",
      },
    },
  },
  plugins: [],
};
