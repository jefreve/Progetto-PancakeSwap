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
let swipersInterval;

cWBtnModal.addEventListener("click", (event) => {
  cWBtnModal.classList.add("bg-[#eeeaf4]");
  cWBtnModal.classList.add("text-[#7A6EAA]");
  cWBtnModal.classList.remove("bg-[#7A6EAA]");
  cWBtnModal.classList.remove("text-white");

  whatsAWalletBtnModal.classList.add("bg-[#7A6EAA]");
  whatsAWalletBtnModal.classList.add("text-white");
  whatsAWalletBtnModal.classList.remove("bg-[#eeeaf4]");
  whatsAWalletBtnModal.classList.remove("text-[#7A6EAA]");

  leftWindowCW.classList.add("flex");
  leftWindowCW.classList.remove("hidden");
  rightWindowCW.classList.remove("flex");
  rightWindowCW.classList.add("hidden");
});

whatsAWalletBtnModal.addEventListener("click", (event) => {
  whatsAWalletBtnModal.classList.remove("bg-[#7A6EAA]");
  whatsAWalletBtnModal.classList.remove("text-white");
  whatsAWalletBtnModal.classList.add("bg-[#eeeaf4]");
  whatsAWalletBtnModal.classList.add("text-[#7A6EAA]");

  cWBtnModal.classList.remove("bg-[#eeeaf4]");
  cWBtnModal.classList.remove("text-[#7A6EAA]");
  cWBtnModal.classList.add("bg-[#7A6EAA]");
  cWBtnModal.classList.add("text-white");

  rightWindowCW.classList.add("flex");
  rightWindowCW.classList.remove("hidden");
  leftWindowCW.classList.remove("flex");
  leftWindowCW.classList.add("hidden");
});

swipersInterval = setInterval(() => {
  swiperIndex++;
  showSwipers(swiperIndex);
}, 5000);

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
  loginUsingWallet.classList.remove("hidden");
  loginUsingWallet.classList.add("block");
  firstStepInDeFi.classList.add("hidden");
  firstStepInDeFi.classList.remove("block");
}
