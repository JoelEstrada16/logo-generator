const fs = require('fs')
const inquirer = require('inquirer')

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
