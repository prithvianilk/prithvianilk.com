module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        ocean: "url('/ocean.jpg')",
      }),
      fontFamily: {
        limelight: ["Limelight", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
