const inquirer = require("inquirer");
const fs = require("fs");
const {Cirlce, Square, Triangle} = require("./shapes")
const SVG = require("./svg")

class User {
  askUser() {
    return inquirer.prompt([
      {
        name: "text",
        type: "input",
        message:
          "Enter text for the logo. (Must not be more than 3 characters.)",
      },
      {
        name: "textColor",
        type: "input",
        message: "Enter a color for the text",
      },
      {
        name: "shape",
        type: "list",
        message: "Select a shape for your logo!",
        choices: ["circle", "triangle", "square",]
      },
      {
        name: "shapeColor",
        type: "input",
        message: "Enter a shape color",
      },
    ]);

    .then(({ text, textColor, shape, shapeColor }) => {
      let shapeType = '';
      if (shape === 'circle') {
        shapeType = new Circle();
      };
      elif (shape === 'square') {
        shapeType = new Square();
      };
      else {
        shapeType = new Triangle()
      };
      shapeType.setColor(shapeColor);
    });
  }
}
