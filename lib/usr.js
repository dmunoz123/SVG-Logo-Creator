const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Square, Triangle } = require("./shapes");
const SVG = require("./svg");

class User {
  askUser() {
    return (
      inquirer
        .prompt([
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
            choices: ["circle", "triangle", "square"],
          },
          {
            name: "shapeColor",
            type: "input",
            message: "Enter a shape color",
          },
        ])
        .then(({ text, textColor, shape, shapeColor }) => {
          let shapeType = "";
          if (shape === "circle") {
            shapeType = new Circle();
          } else if (shape === "square") {
            shapeType = new Square();
          } else {
            shapeType = new Triangle();
          }
          shapeType.setColor(shapeColor);

          //sets all variables for logo using SVG.js file and writes new logo to 'logo.sgv'
          const svg = new SVG();
          svg.setText(text, textColor);
          svg.setShape(shapeType);

          return writeFile("./examples/logo.svg", svg.render());
        })
        // if new file is written, print, if not display error
        .then(() => {
          console.log("Generated logo.svg");
        })
        .catch((error) => {
          console.log(error);
          console.log("Oops! Something went wrong.");
        })
    );
  }
}

module.exports = User;