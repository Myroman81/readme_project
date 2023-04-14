// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const util = require('util');

// TODO: Create an array of questions for user input



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // now we need to write the data to the file system
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            throw err;
        }
        console.log("File Saved");
    })

 }
    //fs.writeToFile(fileName, data, error => {
        

// TODO: Create a function to initialize app
function init() { 
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is the title of your repository?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
            {
                type: 'list',
                message: 'Please choose a license',
                name: 'license',
                choices: ["MIT", "GNU", "OpenBSD", "None"]
            },
        ])
        .then(function (response)  {

            //console.log("User Collected data: ", response);


            let result = generateMarkdown(response);

            //console.log("Returned Data: ", result);
            //const stringResponse = JSON.stringify(result);

            writeToFile("README.md", result)
        })
        .catch(function(error) {
            throw error;
        }) 
    
}

// Function call to initialize app
init();
