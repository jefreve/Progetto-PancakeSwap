const darkLight = document.getElementById("dark-light-button");

const html = document.querySelector("html");

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
