const fs = require('fs')
const inquirer = require("inquirer")
const {Circle, Square, Triangle} = require("./lib/shape")

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
        name: "text color",
        message: "Enter a color word or a hexadecimal number"
    },
    {
        type: "input",
        name: "shape_color",
        message: "Enter a color or hexadecimal number for the shape"
    },
    {
        type: "list",
        name: "shapes",
        message: "Choose which shape you will like",
        choices: ["Circle", "Square", "Triangle"]
    }
]

function writeToFile(fileName, data){
    console.log("Writing [" + data + "] to [" + fileName +"]")
    fs.writeFile(fileName, data, function (err){
        if (err){
            return console.error
        }
        console.log("Logo generated")
    })
}

async function init(){
    let svg_file = "logo.svg"
    let svg_string = ""

    const answers = await inquirer.prompt(questions)

    let uText = "";
    if (answers.text.length > 0 && answers.text.length < 4){
        uText = answers.text
    } else {
        console.log("Invalid please select 1-3 characters")
    
    return;
}
console.log("Text: [" + uText + "]")
ufc = answers["text color"]
console.log("User font color: [" + ufc + "]")
usc = answers.shape_color
console.log("user shape color: [" + usc + "]")
ust = answers["shapes"]
console.log("Shape entered = [" + ust + "]")

let userShape;
if (ust === "Circle" || ust === "circle"){
    userShape = new Circle()
}
else if (ust === "Triangle" || ust === "triangle"){
    userShape = new Triangle()
}
else if (ust === "Square" || ust === "square"){
    userShape = new Square()
}
else {
    console.log("Invalid")
}
userShape.setColor(usc)

let svg = new Svg()
svg.setTextElement(uText, ufc)
svg.setShapeElement(userShape)
svg_string = svg.render()

console.log("Shape displaying:" + svg_string)

writeToFile(svg_file, svg_string)
}
init()
