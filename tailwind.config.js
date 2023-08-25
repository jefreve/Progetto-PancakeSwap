/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
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
};
