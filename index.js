const inquirer = require("inquirer");
const { writeFile } = require("fs/promises")
const { Circle, Square, Triangle } = require("./lib/shapes")
const SVG = require("./lib/svg");
const { write } = require("fs");

const application = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like your SVG to be?",
            choices: ["Circle", "Square", "Triangle"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your shape to be?"
        },
        {
            type: "input",
            name: "text",
            message: "What text would you like inside your SVG? 1-3 characters"
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your SVG to be?"
        }
    ]).then((res) => {
        let shapeValue;
        if(res.shape === "Circle") {
            shapeValue = new Circle()
        }
        if(res.shape === "Square") {
            shapeValue = new Square()
        }
        if(res.shape === "Triangle") {
            shapeValue = new Triangle()
        }
        shapeValue.setColor(res.shapeColor)

        const svg = new SVG()
        svg.setText(res.text, res.textColor)
        svg.setShape(shapeValue)
        return writeFile(`./output/${res.shape}.svg`, svg.render())
    }).then(() => {
        console.log("SVG was successfully generated!")
    })
}

application()