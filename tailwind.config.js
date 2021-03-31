module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      desktop: "1440px",
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: "none",
      arrow: "disclosure-closed",
    },
    spacing: {
      0: 0,
      1: "8px",
      2: "16px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
