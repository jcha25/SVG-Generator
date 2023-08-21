const inquirer = require("inquirer");
// const {writeFile} = require("fs/promises")
const { Circle, Square, Triangle } = require("./shapes")
// const SVG = require("./svg")

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
    ]).then(() => {
        // 
    })
}

application()