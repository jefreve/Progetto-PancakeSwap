/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      screen370: "370px",
      screen500: "500px",
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
        bunnyStatic:
          "url('https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/sleepy-1000.png')",
        degenApe1:
          "url('https://static-nft.pancakeswap.com/mainnet/0x8e311dB45B55DF68b7C1C8D01888a4C43986c60F/degen-ape-3536-1000.png')",
        hiccupBunny:
          "url('https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/hiccup-1000.png')",
        braveTiger:
          "url('https://static-nft.pancakeswap.com/mainnet/0x6f1Dc8a50489C96B6c09bb2aEc28c4043fB1A802/3-d-brave-tigers-9231-1000.png')",
        pancakeSquad1:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-3606-1000.png')",
        pancakeSquad2:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-5789-1000.png')",
        liquidMonster1:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0D464bDde2301C30871bB4C29bB7DD935f5a985C/liquid-monster-3229-1000.png')",
        liquidMonster2:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0D464bDde2301C30871bB4C29bB7DD935f5a985C/liquid-monster-5878-1000.png')",
        liquidMonster3:
          "url('https://static-nft.pancakeswap.com/mainnet/0x0D464bDde2301C30871bB4C29bB7DD935f5a985C/liquid-monster-809-1000.png')",
        degenApe2:
          "url('https://static-nft.pancakeswap.com/mainnet/0x8e311dB45B55DF68b7C1C8D01888a4C43986c60F/degen-ape-5080-1000.png')",
        horrorApe1:
          "url('https://static-nft.pancakeswap.com/mainnet/0xAFc7647b584730694B9606511F11F423A0816eFf/horror-ape-club-1672-1000.png')",
        horrorApe2:
          "url('https://static-nft.pancakeswap.com/mainnet/0xAFc7647b584730694B9606511F11F423A0816eFf/horror-ape-club-2204-1000.png')",
        crossBosses:
          "url('https://static-nft.pancakeswap.com/mainnet/0x9ddc83be1e5254669bdb366941C746A86194D61b/cross-bosses-generation-0-6986-1000.png')",
        gamesterApe:
          "url('https://static-nft.pancakeswap.com/mainnet/0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6/gamester-6052-1000.png')",
        littleGhost:
          "url('https://static-nft.pancakeswap.com/mainnet/0x98F606A4cdDE68b9f68732D21fb9bA8B5510eE48/little-ghosts-2100-1000.png')",
        cactiClub:
          "url('https://static-nft.pancakeswap.com/mainnet/0x9432e72f68614fFdD3BA82616AC59e878284Aac4/cacti-club-0172-1000.png')",
      },
      animation: {
        pieFloating:
          "pieFloating 3s ease-in-out 1s infinite normal none running",
        stonksFloating:
          "stonksFloating 3s ease-in-out 0.66s infinite normal none running",
        folderFloating:
          "stonksFloating 3s ease-in-out 0.33s infinite normal none running",
        bounce: "duration-100 ease-in-out delay-0 infinite",
        topLeft: "topLeft 3s ease-in-out 0s infinite normal none running",
        bottomPancake2right:
          "bottomPancake2right 3s ease-in-out 0.33s infinite normal none running",
        connectWallet: "connectWallet 3s ease infinite",
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
      topLeft: {
        "0%, 100%": { transform: "translate(0px, 0px)" },
        "50%": { transform: "translate(4px, 12px)" },
      },
      bottomPancake2right: {
        "0%, 100%": { transform: "translate(0px, 0px)" },
        "50%": { transform: "translate(6px, 5px)" },
      },
      connectWallet: {
        "0%, 100%": { "background-position": "50%, 0%" },
        "50%": { "background-position": "50%, 100%" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
