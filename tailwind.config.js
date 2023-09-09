// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./**/*.{html,js}"],
//   theme: {
//     screens: {
//       screen370: "370px",
//       screen576: "576px",
//       screen852: "852px",
//       screen968: "968px",
//       screen1080: "1080px",
//     },

//     fontFamily: {
//       body: ["Kanit, sans-serif"],
//     },

//     colors: {
//       "main-purple": "#9A6AFF",
//       "buttons-cyan": "#1EC7D3",
//       "buttons-dark-text": "#191326",
//       "light-violet": "#B8ADD2",
//       "navbar-item-hover": "#353547",
//       "dropdown-border": "#383241",
//       "green-dot": "#31d0aa",
//       "secondary-red": "#ED4B9E",
//       "navbar-icon-hover": "#857E98",
//     },
//     animation: {
//       bounce: "duration-100 ease-in-out delay-0 infinite",
//       pieFloating: "pieFloating 3s ease-in-out 1s infinite normal none running",
//       stonksFloating:
//         "stonksFloating 3s ease-in-out 0.66s infinite normal none running",
//       folderFloating:
//         "stonksFloating 3s ease-in-out 0.33s infinite normal none running",
//     },
//     keyframes: {
//       bounce: {
//         "0%, 100%": { transform: "translate(0px)" },
//         "50%": { transform: "translate(-7px, -7px)" },
//       },
//       fade: {
//         "0%,100%": {
//           opacity: "1",
//         },
//         "50%": {
//           opacity: "0.2",
//         },
//       },
//       pieFloating: {
//         "0%, 100%": { transform: "translate(0px, 0px)" },
//         "50%": { transform: "translate(3px, 15px)" },
//       },
//       stonksFloating: {
//         "0%, 100%": { transform: "translate(0px, 0px)" },
//         "50%": { transform: "translate(5px, 10px)" },
//       },
//       folderFloating: {
//         "0%, 100%": { transform: "translate(0px, 0px)" },
//         "50%": { transform: "translate(5px, 6px)" },
//       },
//     },
//     boxShadow: {
//       button: "0px -1px 0px 0px inset",
//       selectNetwork: "0px -2px 0px 0px inset",
//     },

//     plugins: [],
//     darkMode: "class",
//   },
// };

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
      backgroundImage: {
        planetZudd:
          "url('https://static-nft.pancakeswap.com/mainnet/0xC742d00736DEB5D85DD11DBa8c31b43b5A581d55/banner-sm.png')",
        planetZuddBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0xC742d00736DEB5D85DD11DBa8c31b43b5A581d55/avatar.png')",
        pancakeProtector:
          "url('https://static-nft.pancakeswap.com/mainnet/0x9F0A9654F84141B02a759Bea02B7Df49AB0CE0a0/banner-sm.png')",
        pancakeProtectorBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x9F0A9654F84141B02a759Bea02B7Df49AB0CE0a0/avatar.png')",
        lilPidg:
          "url('https://static-nft.pancakeswap.com/mainnet/0x611747CC4576aAb44f602a65dF3557150C214493/banner-sm.png')",
        lilPidgBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x611747CC4576aAb44f602a65dF3557150C214493/avatar.png')",
        moonPets:
          "url('https://static-nft.pancakeswap.com/mainnet/0xE32aE22Ec60E21980247B4bDAA16E9AEa265F919/banner-sm.png')",
        moonPetsBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0xE32aE22Ec60E21980247B4bDAA16E9AEa265F919/avatar.png')",
        goodFellas:
          "url('https://static-nft.pancakeswap.com/mainnet/0x59b39a2092cda9C590B1576EE5AA204a487e46e6/banner-sm.png')",
        goodFellasBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x59b39a2092cda9C590B1576EE5AA204a487e46e6/avatar.png')",
        planetZudd2:
          "url('https://static-nft.pancakeswap.com/mainnet/0xa61da6E5B8F61285d46C2ED65eBE0E7c2FA27044/banner-sm.png')",
        planetZuddBanner2:
          "url('https://static-nft.pancakeswap.com/mainnet/0xa61da6E5B8F61285d46C2ED65eBE0E7c2FA27044/avatar.png')",
        pancakeSquad:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/banner-sm.png')",
        pancakeSquadBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/avatar.png')",
        pancakeB:
          "url('https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/banner-sm.png')",
        pancakeBBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/avatar.png')",
        gamesterA:
          "url('https://static-nft.pancakeswap.com/mainnet/0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6/banner-sm.png')",
        gamesterABanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6/avatar.png')",
        shitPunks:
          "url('https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/banner-sm.png')",
        shitPunksBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/avatar.png')",
        pixelS:
          "url('https://static-nft.pancakeswap.com/mainnet/0x5F41842CFF838120271d772C6994F051d418a4aD/banner-sm.png')",
        pixelSBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x5F41842CFF838120271d772C6994F051d418a4aD/avatar.png')",
        bornBad:
          "url('https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/banner-sm.png')",
        bornBadBanner:
          "url('https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/avatar.png')",
      },
      animation: {
        pieFloating:
          "pieFloating 3s ease-in-out 1s infinite normal none running",
        stonksFloating:
          "stonksFloating 3s ease-in-out 0.66s infinite normal none running",
        folderFloating:
          "stonksFloating 3s ease-in-out 0.33s infinite normal none running",
        bounce: "duration-100 ease-in-out delay-0 infinite",
      },
    },
    boxShadow: {
      button: "0px -1px 0px 0px inset",
      selectNetwork: "0px -2px 0px 0px inset",
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
  },
  plugins: [],
  darkMode: "class",
};
