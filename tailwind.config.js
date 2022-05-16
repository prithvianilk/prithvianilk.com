module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'title-green': '#50fa7b',
        'link-pink': '#ff79c6',
        white: '#f8f8f2',
      },
      fontFamily: {
        krona: ['Krona One', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
