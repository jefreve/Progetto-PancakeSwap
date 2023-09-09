const html = document.querySelector("html");
const darkLight = document.getElementById("dark-light-button");
const fixedNavbar = document.getElementById("fixed-navbar");
const settingsIcon = document.getElementById("settings-icon");
const settingsModal = document.getElementById("settings-modal");
const closeModal = document.getElementById("close-modal");
const modalBg = document.getElementById("modal-bg");
const navbar = document.getElementById("navbar");

let swipersInterval;

darkLight.addEventListener("click", () => {
  html.classList.toggle("dark");
});

const switchButtons = Array.from(document.getElementsByClassName("switch"));
switchButtons.forEach((el) => {
  el.addEventListener("change", () => {
    const switchContainer = el.closest(".switch-container");
    if (el.checked) {
      switchContainer.style.backgroundColor = "#32d0aa";
    } else {
      switchContainer.style.backgroundColor = "";
    }
  });
});

const darkLightSwitchNavbar = document.getElementById("darkLightSwitchNavbar");
const sunNavbar = document.getElementById("sunNavbar");
const moonNavbar = document.getElementById("moonNavbar");
const navbarSlider = document.getElementById("navbar-slider");

darkLightSwitchNavbar.addEventListener("change", () => {
  if (darkLightSwitchNavbar.checked) {
    html.classList.toggle("dark");
    darkLightSwitchFooter.checked = true;
    navbarSlider.style.left = "calc(100% - 29px)";
    footerSlider.style.left = "calc(100% - 29px)";
    sunNavbar.classList.toggle("hidden");
    moonNavbar.classList.toggle("hidden");
    sunFooter.classList.toggle("hidden");
    moonFooter.classList.toggle("hidden");
  } else {
    html.classList.toggle("dark");
    darkLightSwitchFooter.checked = false;
    navbarSlider.style.left = "3px";
    footerSlider.style.left = "3px";
    sunNavbar.classList.toggle("hidden");
    moonNavbar.classList.toggle("hidden");
    sunFooter.classList.toggle("hidden");
    moonFooter.classList.toggle("hidden");
  }
});

const connectWalletModal = document.getElementById("connect-wallet-modal");

settingsIcon.addEventListener("click", () => {
  settingsModal.classList.remove("hidden");
  settingsModal.classList.add("flex");
  modalBg.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  settingsModal.classList.add("hidden");
  settingsModal.classList.remove("flex");
  modalBg.classList.add("hidden");
});

modalBg.addEventListener("click", () => {
  settingsModal.classList.add("hidden");
  settingsModal.classList.remove("flex");
  modalBg.classList.add("hidden");
});

// this is for the navbar showing in mobile mode

fixedNavbar.addEventListener("click", (e) => {
  if (
    e.target.matches("svg") ||
    e.target.matches("span") ||
    e.target.matches("button") ||
    e.target.matches(".svg-parent") ||
    e.target.matches(".menu-item")
  ) {
    const svgParent = e.target.closest(".svg-parent");

    const fixedNavbarElement = svgParent.parentNode;

    const dropdown = fixedNavbarElement.querySelector("ul");

    dropdown.classList.toggle("block");
    dropdown.classList.toggle("hidden");
    dropdown.style.width = "calc(100% - 32px)";
  }
});

const darkLightSwitchFooter = document.getElementById("darkLightSwitchfooter");
const sunFooter = document.getElementById("sunFooter");
const moonFooter = document.getElementById("moonFooter");
const footerSlider = document.getElementById("footer-slider");

darkLightSwitchFooter.addEventListener("change", () => {
  if (darkLightSwitchFooter.checked) {
    html.classList.toggle("dark");
    darkLightSwitchNavbar.checked = true;
    navbarSlider.style.left = "calc(100% - 29px)";
    footerSlider.style.left = "calc(100% - 29px)";
    sunNavbar.classList.toggle("hidden");
    moonNavbar.classList.toggle("hidden");
    sunFooter.classList.toggle("hidden");
    moonFooter.classList.toggle("hidden");
  } else {
    html.classList.toggle("dark");
    darkLightSwitchNavbar.checked = false;
    navbarSlider.style.left = "3px";
    footerSlider.style.left = "3px";
    sunNavbar.classList.toggle("hidden");
    moonNavbar.classList.toggle("hidden");
    sunFooter.classList.toggle("hidden");
    moonFooter.classList.toggle("hidden");
  }
});

// script per banner top dinamico con uso di localStorage
const bannerTopContainer = document.createElement("div");
bannerTopContainer.setAttribute("id", "banner-top-container");

const topBannerAndNavbar = document.getElementById("top-banner-and-navbar");
topBannerAndNavbar.insertBefore(bannerTopContainer, navbar);

bannerTopUserPreference();

function bannerTopUserPreference() {
  if (
    localStorage.getItem("bannerShown") === "true" ||
    localStorage.getItem("bannerShown") == undefined
  ) {
    localStorage.setItem("bannerShown", "true");
    bannerTopContainer.classList.add(
      "font-body",
      "h-[70px]",
      "w-full",
      "min-h-[70px]",
      "max-h-[70px]"
    );

    bannerTopContainer.innerHTML = `<div
    class="text-sm flex items-center bg-gradient-to-b from-[#62419C] to-[#402767] screen852:from-[#8051D5] screen852:to-[#492387] overflow-hidden h-full"
  >
    <div class="flex justify-center items-center w-full h-full">
      <img
        class="hidden screen852:block w-[92px] h-auto max-w-full"
        src="../assets/topBannerHome/phishing-warning-bunny.webp"
        alt=""
      />
      <div
        class="screen852:flex items-center flex-wrap screen852:bg-gradient-to-b from-[#62419C] to-[#402767] screen852:h-[80%] screen852:w-[60%] screen852:rounded-2xl p-2 leading-normal antialiased"
      >
        <span
          class="text-[#FFB237] font-semibold mr-1 flex-shrink-0 leading-normal"
          >PHISHING WARNING:</span
        >
        <span class="text-[#BDC2C4] font-normal mr-1 flex-shrink-0"
          >please make sure you're visiting</span
        >
        <span class="text-white font-semibold mr-1 flex-shrink-0"
          >https://pancakeswap.finance</span
        >
        <span class="text-[#BDC2C4] font-normal mr-1 flex-shrink-0">
          - check the URL carefully.</span
        >
      </div>
    </div>
  
    <div
      class="flex justify-center items-center cursor-pointer p-0.5 w-12 h-12 text-white hover:text-[#CBBAE4] transition-colors duration-200"
    >
      <svg
      id="close-top-banner"
        viewBox="0 0 24 24"
        color="currentColor"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        class="sc-231a1e38-0 iNUyNs"
      >
        <path
          fill="currentColor"
          d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
        ></path>
      </svg>
    </div>
  </div>`;

    //implementa la chiusura del top banner quando si clicca sulla x
    const closeTopBanner = document.getElementById("close-top-banner");

    closeTopBanner.addEventListener("click", (event) => {
      if (document.getElementById("banner-top-container") != null) {
        const bannerTopContainer = document.getElementById(
          "banner-top-container"
        );
        bannerTopContainer.remove();
        localStorage.setItem("bannerShown", false);
      }
    });
  }
}

// modal connect wallet
const connectWalletBtnNavbar = document.getElementById(
  "connect-wallet-button-navbar"
);
const connectBtnNavbar = document.getElementById("connect-button-navbar");
const modalBgConnectWallet = document.getElementById("modal-bg-connect-wallet");

connectWalletBtnNavbar.addEventListener("click", connectWalletModalAppear);
connectBtnNavbar.addEventListener("click", connectWalletModalAppear);

function connectWalletModalAppear() {
  connectWalletModal.classList.add("flex");
  connectWalletModal.classList.remove("hidden");
  modalBgConnectWallet.classList.remove("hidden");
}

modalBgConnectWallet.addEventListener("click", removeModalConnectWallet);

function resetModalInitialView() {
  clearInterval(swipersInterval);
  rightWindowCW.classList.remove("flex");
  rightWindowCW.classList.add("hidden");
  leftWindowCW.classList.add("flex");
  leftWindowCW.classList.remove("hidden");

  whatsAWalletBtnModal.classList.add("bg-[#7A6EAA]");
  whatsAWalletBtnModal.classList.add("text-white");
  whatsAWalletBtnModal.classList.remove("bg-[#eeeaf4]");
  whatsAWalletBtnModal.classList.remove("text-[#7A6EAA]");

  whatsAWalletBtnModal.classList.add("dark:bg-light-violet");
  whatsAWalletBtnModal.classList.add("dark:text-[#27262c]");
  whatsAWalletBtnModal.classList.remove("dark:bg-[#372f47]");
  whatsAWalletBtnModal.classList.remove("dark:text-light-violet");

  cWBtnModal.classList.add("bg-[#eeeaf4]");
  cWBtnModal.classList.add("text-[#7A6EAA]");
  cWBtnModal.classList.remove("bg-[#7A6EAA]");
  cWBtnModal.classList.remove("text-white");

  cWBtnModal.classList.add("dark:bg-[#372f47]");
  cWBtnModal.classList.add("dark:text-light-violet");
  cWBtnModal.classList.remove("dark:bg-light-violet");
  cWBtnModal.classList.remove("dark:text-[#27262c]");
}

function removeModalConnectWallet() {
  connectWalletModal.classList.remove("flex");
  connectWalletModal.classList.add("hidden");
  modalBgConnectWallet.classList.add("hidden");
  clearInterval(swipersInterval);
  resetModalInitialView();
}

const loginUsingWallet = document.getElementById("login-using-wallet");
const firstStepInDeFi = document.getElementById("first-step-in-defi");

const leftSwiperSelector = document.getElementById("left-swiper-selector");
const rightSwiperSelector = document.getElementById("right-swiper-selector");

const leftWindowCW = document.getElementById("left-window-cw");
const rightWindowCW = document.getElementById("right-window-cw");
const whatsAWalletBtnModal = document.getElementById(
  "whats-a-wallet-btn-modal"
);
const cWBtnModal = document.getElementById("cw-btn-modal");

let swiperIndex = 1;

cWBtnModal.addEventListener("click", clickHandlercWBtnModal);

function clickHandlercWBtnModal() {
  cWBtnModal.classList.add("bg-[#eeeaf4]");
  cWBtnModal.classList.add("text-[#7A6EAA]");
  cWBtnModal.classList.remove("bg-[#7A6EAA]");
  cWBtnModal.classList.remove("text-white");

  cWBtnModal.classList.add("dark:bg-[#372f47]");
  cWBtnModal.classList.add("dark:text-light-violet");
  cWBtnModal.classList.remove("dark:bg-light-violet");
  cWBtnModal.classList.remove("dark:text-[#27262c]");

  whatsAWalletBtnModal.classList.add("bg-[#7A6EAA]");
  whatsAWalletBtnModal.classList.add("text-white");
  whatsAWalletBtnModal.classList.remove("bg-[#eeeaf4]");
  whatsAWalletBtnModal.classList.remove("text-[#7A6EAA]");

  whatsAWalletBtnModal.classList.add("dark:bg-light-violet");
  whatsAWalletBtnModal.classList.add("dark:text-[#27262c]");
  whatsAWalletBtnModal.classList.remove("dark:bg-[#372f47]");
  whatsAWalletBtnModal.classList.remove("dark:text-light-violet");

  leftWindowCW.classList.add("flex");
  leftWindowCW.classList.remove("hidden");
  rightWindowCW.classList.remove("flex");
  rightWindowCW.classList.add("hidden");
}

whatsAWalletBtnModal.addEventListener("click", () => {
  clearInterval(swipersInterval);

  swipersInterval = setInterval(() => {
    swiperIndex++;
    showSwipers(swiperIndex);
  }, 5000);

  clickHandlerwhatsAWalletBtnModal();
});

function clickHandlerwhatsAWalletBtnModal() {
  whatsAWalletBtnModal.classList.remove("bg-[#7A6EAA]");
  whatsAWalletBtnModal.classList.remove("text-white");
  whatsAWalletBtnModal.classList.add("bg-[#eeeaf4]");
  whatsAWalletBtnModal.classList.add("text-[#7A6EAA]");

  whatsAWalletBtnModal.classList.remove("dark:bg-light-violet");
  whatsAWalletBtnModal.classList.remove("dark:text-[#27262c]");
  whatsAWalletBtnModal.classList.add("dark:bg-[#372f47]");
  whatsAWalletBtnModal.classList.add("dark:text-light-violet");

  cWBtnModal.classList.remove("bg-[#eeeaf4]");
  cWBtnModal.classList.remove("text-[#7A6EAA]");
  cWBtnModal.classList.add("bg-[#7A6EAA]");
  cWBtnModal.classList.add("text-white");

  cWBtnModal.classList.remove("dark:bg-[#372f47]");
  cWBtnModal.classList.remove("dark:text-light-violet");
  cWBtnModal.classList.add("dark:bg-light-violet");
  cWBtnModal.classList.add("dark:text-[#27262c]");

  rightWindowCW.classList.add("flex");
  rightWindowCW.classList.remove("hidden");
  leftWindowCW.classList.remove("flex");
  leftWindowCW.classList.add("hidden");
}

leftSwiperSelector.addEventListener("click", (event) => {
  leftSwiperActive();
  clearInterval(swipersInterval);

  swiperIndex = 1;
  showSwipers(swiperIndex);

  swipersInterval = swipersInterval = setInterval(() => {
    swiperIndex++;
    showSwipers(swiperIndex);
  }, 5000);
});

rightSwiperSelector.addEventListener("click", (event) => {
  rightSwiperActive();

  clearInterval(swipersInterval);

  swiperIndex = 2;
  showSwipers(swiperIndex);

  swipersInterval = swipersInterval = setInterval(() => {
    swiperIndex++;
    showSwipers(swiperIndex);
  }, 5000);
});

function showSwipers(index) {
  const swipers = document.getElementsByClassName("swipers");

  let i;

  if (index > swipers.length) {
    swiperIndex = 1;
  }

  for (i = 0; i < swipers.length; i++) {
    swipers[i].style.display = "none";
  }

  swipers[swiperIndex - 1].style.display = "flex";
  if (swiperIndex === 1) {
    leftSwiperActive();
  } else {
    rightSwiperActive();
  }
}

function leftSwiperActive() {
  leftSwiperSelector.firstElementChild.classList.add("bg-[#7645d9]");
  leftSwiperSelector.firstElementChild.classList.remove("bg-[#d7caec]");
  rightSwiperSelector.firstElementChild.classList.remove("bg-[#7645d9]");
  rightSwiperSelector.firstElementChild.classList.add("bg-[#d7caec]");

  leftSwiperSelector.firstElementChild.classList.add("dark:bg-main-purple");
  leftSwiperSelector.firstElementChild.classList.remove("dark:bg-[#262130]");
  rightSwiperSelector.firstElementChild.classList.remove("dark:bg-main-purple");
  rightSwiperSelector.firstElementChild.classList.add("dark:bg-[#262130]");

  firstStepInDeFi.classList.add("block");
  firstStepInDeFi.classList.remove("hidden");
  loginUsingWallet.classList.add("hidden");
  loginUsingWallet.classList.remove("block");
}
function rightSwiperActive() {
  rightSwiperSelector.firstElementChild.classList.add("bg-[#7645d9]");
  rightSwiperSelector.firstElementChild.classList.remove("bg-[#d7caec]");
  leftSwiperSelector.firstElementChild.classList.remove("bg-[#7645d9]");
  leftSwiperSelector.firstElementChild.classList.add("bg-[#d7caec]");

  rightSwiperSelector.firstElementChild.classList.add("dark:bg-main-purple");
  rightSwiperSelector.firstElementChild.classList.remove("dark:bg-[#262130]");
  leftSwiperSelector.firstElementChild.classList.remove("dark:bg-main-purple");
  leftSwiperSelector.firstElementChild.classList.add("dark:bg-[#262130]");

  loginUsingWallet.classList.remove("hidden");
  loginUsingWallet.classList.add("block");
  firstStepInDeFi.classList.add("hidden");
  firstStepInDeFi.classList.remove("block");
}
