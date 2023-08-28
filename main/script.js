const darkLight = document.getElementById("dark-light-button");
const html = document.querySelector("html");
const fixedNavbar = document.getElementById("fixed-navbar");

darkLight.addEventListener("click", () => {
  html.classList.toggle("dark");
});

// const switchBtn = document.getElementById("switch");
// const slider = document.getElementById("slider");

// switchBtn.addEventListener("change", () => {
//   slider.classList.toggle("switchSelected");
// });

const switchButtons = Array.from(document.getElementsByClassName("switch"));
switchButtons.forEach((el) => {
  el.addEventListener("change", () => {
    const switchContainer = el.closest(".switch-container");
    if (el.checked) {
      switchContainer.style.backgroundColor = "#32d0aa";
    } else {
      switchContainer.style.backgroundColor = "";
    }

    //da fare in modo che torni come prima quando non checked
  });
});

// addEventListener("change", () => {});

fixedNavbar.addEventListener("click", (e) => {
  if (
    e.target.matches("svg") ||
    e.target.matches("span") ||
    e.target.matches("button") ||
    e.target.matches(".svg-parent") ||
    e.target.matches(".menu-item")
  ) {
    // const menuItems = Array.from(document.getElementsByClassName(".menu-item"));
    // menuItems.forEach((menuItem) => {
    //   const item = menuItem.querySelector("ul");
    //   const classes = Array.from(item.classList);

    // });

    const svgParent = e.target.closest(".svg-parent");

    const fixedNavbarElement = svgParent.parentNode;

    const dropdown = fixedNavbarElement.querySelector("ul");

    dropdown.classList.toggle("block");
    dropdown.classList.toggle("hidden");
    dropdown.style.width = "calc(100% - 32px)";
  }
});
