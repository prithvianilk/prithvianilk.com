module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "white-bg": "#FEF7FC",
        "title-red": "#E36E60",
      },
      fontFamily: {
        krona: ["Krona One", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
