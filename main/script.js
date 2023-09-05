const html = document.querySelector("html");
const darkLight = document.getElementById("dark-light-button");
const fixedNavbar = document.getElementById("fixed-navbar");
const settingsIcon = document.getElementById("settings-icon");
const settingsModal = document.getElementById("settings-modal");
const closeModal = document.getElementById("close-modal");
const modalBg = document.getElementById("modal-bg");

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
const dLSC = darkLightSwitchNavbar.closest(".switch-container");

darkLightSwitchNavbar.addEventListener("change", () => {
  if (darkLightSwitchNavbar.checked) {
    html.classList.toggle("dark");
    sunNavbar.classList.toggle("hidden");
    moonNavbar.classList.toggle("hidden");
    dLSC.style.backgroundColor = "#666171";
  } else {
    html.classList.toggle("dark");
    sunNavbar.classList.toggle("hidden");
    moonNavbar.classList.toggle("hidden");
    dLSC.style.backgroundColor = "";
  }
});

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

darkLightSwitchFooter.addEventListener("change", () => {
  if (darkLightSwitchFooter.checked) {
    html.classList.toggle("dark");
    sunFooter.classList.toggle("hidden");
    moonFooter.classList.toggle("hidden");
  } else {
    html.classList.toggle("dark");
    sunFooter.classList.toggle("hidden");
    moonFooter.classList.toggle("hidden");
  }
});
