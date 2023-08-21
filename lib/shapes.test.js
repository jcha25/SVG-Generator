const {Circle, Square, Triangle} = require("./shapes")

describe("Circle", () => {
    test("Blue Square", () => {
        const correct = '<circle cx="150" cy="100" r="80" fill="blue" />'
        const circle = new Circle()
        circle.setColor("blue")
        const output = circle.render()
        expect(output).toEqual(correct)
    }),
    test("Red Square", () => {
        const correct = '<circle cx="150" cy="100" r="80" fill="red" />'
        const circle = new Circle()
        circle.setColor("red")
        const output = circle.render()
        expect(output).toEqual(correct)
    })
})

describe("Triangle", () => {
    test("Purple triangle", () => {
        const correct = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
        const triangle = new Triangle()
        triangle.setColor("purple")
        const output = triangle.render()
        expect(output).toEqual(correct)
    }),
    test("Green triangle", () => {
        const correct = '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
        const triangle = new Triangle()
        triangle.setColor("green")
        const output = triangle.render()
        expect(output).toEqual(correct)
    })
})

describe("Square", () => {
    test("Brown square", () => {
        const correct = '<rect x="90" y="40" width="120" height="120" fill="brown" />'
        const square = new Square()
        square.setColor("brown")
        const output = square.render()
        expect(output).toEqual(correct)
    }),
    test("Orange square", () => {
        const correct = '<rect x="90" y="40" width="120" height="120" fill="orange" />'
        const square = new Square()
        square.setColor("orange")
        const output = square.render()
        expect(output).toEqual(correct)
    })
})