const inquirer = require("inquirer");
const {writeFile} = require("fs/promises")
const {Circle, Square, Triangle} = require("./shapes")
const SVG = require("./svg")