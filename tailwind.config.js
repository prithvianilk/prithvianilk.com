module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
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
