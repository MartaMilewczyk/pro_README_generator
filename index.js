const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Please enter your answers for following questions: ',
        name: 'instruction',
    },
    {
        type: 'input',
        message: 'Please enter the title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter your your table of contents: ',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'Please enter steps required to install your application: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter instructions and examples for use your application: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter list of your collaborators or third-party assets, if any, with links to their GitHub profiles ',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please enter appropriate license for your application : ',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU v3.0', 'Eclipse 2.0', 'Mozilla 2.0', 'Boost Software 1.0', 'other']
    },
    {
        type: 'input',
        message: 'Please enter guidelines for developer contribution: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter github account name: ',
        name: 'Qgithub',
    },
    {
        type: 'input',
        message: 'Please enter e-mail address: ',
        name: 'Qemail',
    },
    {
        type: 'input',
        message: 'Please enter name of README file: ',
        name: 'filename',
    },
    
    


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
