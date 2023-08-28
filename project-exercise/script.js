console.log("Hello");

class TextCreator {
  element;
  content;

  constructor(content) {
    const textEl = document.createElement("p");
    this.element = document.body.appendChild(textEl);
    this.content = content;
    this.update();
  }

  setContent(content) {
    this.content = content;
    this.update();
  }

  setColor(code) {
    this.element.style.color = "#" + code;
  }

  update() {
    this.element.innerHTML = this.content;
  }
}

const textInstance = new TextCreator("Ciao Lorenzo");
