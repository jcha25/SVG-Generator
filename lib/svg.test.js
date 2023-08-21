const SVG = require("./svg")
const {Circle, Square, Triangle} = require('./shapes')

describe("Circle SVG", () => {
    test("Blue Circle", () => {
        const correct = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /></svg>'
        const svg = new SVG()
        const shape = new Circle()
        shape.setColor("blue")
        svg.setShape(shape)
        const output = svg.render()
        expect(output).toEqual(correct)
    })
})

describe("Square SVG", () => {
    test("Purple Square", () => {
        const correct = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="purple" /></svg>'
        const svg = new SVG()
        const shape = new Square()
        shape.setColor("purple")
        svg.setShape(shape)
        const output = svg.render()
        expect(output).toEqual(correct)
    })
})

describe("Triangle SVG", () => {
    test("Red Triangle", () => {
        const correct = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /></svg>'
        const svg = new SVG()
        const shape = new Triangle()
        shape.setColor("red")
        svg.setShape(shape)
        const output = svg.render()
        expect(output).toEqual(correct)
    })
})
