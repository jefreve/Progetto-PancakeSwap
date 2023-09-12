// Function to start the animation

// const animationTriggered = false;

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

window.addEventListener("scroll", () => {
  //   if (!animationTriggered) {
  const numericElements = document.querySelectorAll(".numeric-animation");

  numericElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      startNumericAnimation(element);
    }
  });

  // animationTriggered = true; // Set the flag to true to prevent further animations
  //   }
});
