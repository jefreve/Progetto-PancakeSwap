/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      screen576: "576px",
      screen852: "852px",
      screen968: "968px",
      screen1080: "1080px",
    },
    extend: {
      colors: {
        "main-purple": "#9A6AFF",
        "buttons-cyan": "#1EC7D3",
        "buttons-dark-text": "#191326",
        "light-violet": "#B8ADD2",
        "navbar-item-hover": "#353547",
        "dropdown-border": "#383241",
        "green-dot": "#31d0aa",
        "secondary-red": "#ED4B9E",
        "navbar-icon-hover": "#857E98",
      },
      boxShadow: {
        button: "0px -1px 0px 0px inset",
        selectNetwork: "0px -2px 0px 0px inset",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
