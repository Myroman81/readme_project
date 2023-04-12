// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your github username?),
    name: 'username',
},
    type: 'input',
    message: 'What is the title of your repository?',
    name: 'title',
},
type: 'input',
    message: 'What is your email address?',
        name: 'email',
},
type: 'choice',
    message: 'Please choose a license',
        name: 'license',
},
])
.then(function (response) {
            console.log(response);
            const stringResponse = JSON.stringify(response)

        }

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
