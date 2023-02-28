const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Please enter your answers for following questions to create your README file... ',
        name: 'instruction',
    },
    {
        type: 'input',
        message: 'Please enter the title of your project: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter description explaining aim of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the table of contents: ',
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
        message: 'Please enter list of your collaborators or third-party assets, if any, with links to their GitHub profiles: ',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please enter appropriate license for your application: ',
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
        message: 'Please enter your github account name: ',
        name: 'Qgithub',
    },
    {
        type: 'input',
        message: 'Please enter your e-mail address: ',
        name: 'Qemail',
    },
    {
        type: 'input',
        message: 'Please enter name for your README file: ',
        name: 'fileName',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => 
    error ? console.error(error) : console.log("README has been created succesfully!"));
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
    writeToFile(`${data.fileName}.md`, generateMarkdown.generateMarkdown(data));
    });
};

// function call to initialize program
init();
