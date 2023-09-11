// Function to start the animation
function startNumericAnimation(element) {
  const targetValue = parseInt(element.getAttribute("data-value"));
  let currentValue = 0;

  const updateValue = () => {
    if (currentValue < targetValue) {
      let newValue = Math.floor(Math.random() * 20 + 1);
      if (currentValue + newValue > targetValue) {
        currentValue = targetValue;
      } else {
        currentValue += newValue;
      }
      element.textContent = currentValue;
      requestAnimationFrame(updateValue);
    }
  };

  updateValue();
}

// Detect when the user scrolls to the section
window.addEventListener("scroll", () => {
  const numericElementList = document.querySelectorAll(".numeric-animation");
  numericElementList.forEach((numericElement) => {
    const elementTop = numericElement.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      startNumericAnimation(numericElement);
    }
  });
});
