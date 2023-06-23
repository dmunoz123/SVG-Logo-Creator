const { Circle, Triangle, Square } = require("./shapes");

describe("Shapes", () => {
  //color coding testing for Circle class
  describe("Circle", () => {
    test("should render a BLUE svg logo by accepting a color param", () => {
      // this is what our expected circle.svg SHOULD look like when the color blue is chosen for the shapeColor
      const expectedSVG = '<circle cx="150" cy="100" r="80" fill="blue" />';

      //initializing a new Circle() to compare to our expected output
      const circle = new Circle();
      circle.setColor("blue");
      const resultSVG = circle.render();

      //assert our expected = our actual result
      expect(resultSVG).toEqual(expectedSVG);
    });

    test("should render a BLUE circle svg logo by accepting a color param using hexadecimal", () => {
      // now using hexadecimal form, this should still print out a logo with a blue shapeColor
      const expectedSVG = '<circle cx="150" cy="100" r="80" fill="#0000FF" />';

      //initializing a new Circle() with hexadecimal blue for the color to compare to our expected output
      const circle = new Circle();
      circle.setColor("#0000FF");
      const resultSVG = circle.render();

      expect(resultSVG).toEqual(expectedSVG);
    });
  });

  //color coded testing for Triangle class
  describe("Triangle", () => {
    test("should render a GREEN triangle svg logo by accepting a color param", () => {
      // this is what our expected triangle.svg SHOULD look like when the color green is chosen for the shapeColor
      const expectedSVG =
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />';

      //initializing a new Triangle() to compare to our expected output
      const triangle = new Triangle();
      triangle.setColor("green");
      const resultSVG = triangle.render();

      //assert our expected = our actual result
      expect(resultSVG).toEqual(expectedSVG);
    });

    test("should render a GREEN svg logo by accepting a color param using hexadecimal", () => {
      // now using hexadecimal form, this should still print out a logo with a green shapeColor
      const expectedSVG =
        '<polygon points="150, 18 244, 182 56, 182" fill="#008000" />';

      //initializing a new Triangle() with hexadecimal green for the color to compare to our expected output
      const triangle = new Triangle();
      triangle.setColor("#008000");
      const resultSVG = triangle.render();

      expect(resultSVG).toEqual(expectedSVG);
    });
  });

  //color coded testing for Square class
  describe("Square", () => {
    test("should render a RED square svg logo by accepting a color param", () => {
      // this is what our expected square.svg SHOULD look like when the color red is chosen for the shapeColor
      const expectedSVG =
        '<rect x="90" y="40" width="120" height="120" fill="red" />';

      //initializing a new Square() to compare to our expected output
      const square = new Square();
      square.setColor("red");
      const resultSVG = square.render();

      //assert our expected = our actual result
      expect(resultSVG).toEqual(expectedSVG);
    });

    test("should render a RED svg logo by accepting a color param using hexadecimal", () => {
      // now using hexadecimal form, this should still print out a logo with a red shapeColor
      const expectedSVG =
        '<rect x="90" y="40" width="120" height="120" fill="#FF0000" />';

      //initializing a new Square() with hexadecimal red for the color to compare to our expected output
      const square = new Square();
      square.setColor("#FF0000");
      const resultSVG = square.render();

      expect(resultSVG).toEqual(expectedSVG);
    });
  });
});
