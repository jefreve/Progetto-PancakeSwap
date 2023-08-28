/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      screen370: "370px",
      screen576: "576px",
      screen852: "852px",
      screen968: "968px",
      screen1080: "1080px",
    },

    fontFamily: {
      body: ["Kanit, sans-serif"],
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
      animation: {
        pieFloating:
          "pieFloating 3s ease-in-out 1s infinite normal none running",
        stonksFloating:
          "stonksFloating 3s ease-in-out 0.66s infinite normal none running",
        folderFloating:
          "stonksFloating 3s ease-in-out 0.33s infinite normal none running",
      },
      keyframes: {
        pieFloating: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(3px, 15px)" },
        },
        stonksFloating: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(5px, 10px)" },
        },
        folderFloating: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(5px, 6px)" },
        },
      },
      boxShadow: {
        button: "0px -1px 0px 0px inset",
        selectNetwork: "0px -2px 0px 0px inset",

        animation: {
          bounce: "duration-100 ease-in-out delay-0 infinite",
        },
        keyframes: {
          fade: {
            "0%,100%": {
              opacity: "1",
            },
            "50%": {
              opacity: "0.2",
            },
          },
          bounce: {
            "0%, 100%": { transform: "translate(0px)" },
            "50%": { transform: "translate(-7px, -7px)" },
          },
        },
      },
    },
    plugins: [],
    darkMode: "class",
  },
};
