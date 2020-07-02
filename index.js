const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
     {
        type: "input",
        name: "description",
        message: "Provide description of your project.."
    },
     {
        type: "input",
        name: "installation",
        message: "What are the steps required to install."
    }, 
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for usage."
    },
     {
        type: "checkbox",
        name: "license",
        message: "Enter license.",
        choices: [
            "MIT",
            "Apache",
            "GNU",
            "Mozilla Public License"
        ]}, 
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors."
    }, 
    {
        type: "input",
        name: "tests",
        message: "What are the tests."
    }, 
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    } 


  ];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, function(err){
        if(err){
            console.log(err)}})
        }
     


// function to initialize program
async function  init () {
     const response = await inquirer.prompt(questions);
        writeToFile("README.md", generateMarkdown(response));

 }




init();
