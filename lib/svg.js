class SVG {
  constructor() {
    //initialize two new variables textInput and shapeInput to an empty string to use later on
    this.textInput = "";
    this.shapeInput = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeInput}${this.textInput}</svg>`;
  }

  //will render the type of shape provided (used for testing)
  setShape(shapeType) {
    this.shapeInput = shapeType.render();
  }

  //when called will render the text with both the correct color and message
  setText(input, color) {
    if (input.length > 3) {
      throw new Error("Text must be at most 3 characters.");
    }
    this.textInput = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${input}</text>`
  }
}

module.exports = SVG;