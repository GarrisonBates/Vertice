/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#093594",
        gray: "#424242",
        lightblue: "#CCDDF7",
        dark: "#010100",
      },
    },
  },
  plugins: [],
  important: "#root",
};
