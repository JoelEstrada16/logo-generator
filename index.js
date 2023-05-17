const fs = require('fs')
const inquirer = require('inquirer')
const {CIrlce, Square, Triangle} = require("./lib/shape")

class Svg{
    constructor(){
        this.shapeElement = ''
        this.textElement = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    } 
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for the text"
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color word or a hexadecimal number"
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color or hexadecimal number for the shape"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which shape you will like",
        choices: ["Circle", "Square", "Triangle"]
    }
]
