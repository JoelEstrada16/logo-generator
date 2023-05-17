const {Circle, Square, Triangle} = require("./shape")

describe('Square', () => {
    test('renders the color', () => {
        const shape = new Square();
        let color = ('blue')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="${color}" />`)
    })
})
describe('Circle', () => {
    test('renders the color', () => {
        const shape = new Circle();
        let color = ('blue')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`)
    })
})
describe('Triangle', () => {
    test('renders the color', () => {
        const shape = new Triangle();
        let color = ('blue')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`)
    })
})