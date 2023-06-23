class SVG {
  constructor() {
    //initialize two new variables textInput and shapeInput to an empty string to use later on
    this.textInput = "";
    this.shapeInput = "";
  }

  setShape(shapeType) {
    this.shapeInput = shapeType.render();
  }

  setText(input, color) {
    render() {
      this.textInput = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
  }
}

module.exports = SVG;