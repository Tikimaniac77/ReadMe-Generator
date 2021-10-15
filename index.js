// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the insctructions to install & run your application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage instructions.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the projects contribution guidelines',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your projects test instructions.',
        },
        {
            type: 'list',
            message: 'Which license will your application be under?',
            name: 'license',
            choices: ['MIT', 'ISC', 'GNUv3.0']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email Address?',
        }        
    ]);
}; 



// TODO: Create a function to write README file
const writeToFile = ({title, description, installation, usage, contributing, test, license, username, email}) =>

`# ${title}
![Badge for GitHub repo top language](https://img.shields.io/static/v1?label=License&message=${license}&color=brightgreen) 
\nCheck out the badges hosted by [shields.io](https://shields.io/).
\n==========================================================
## Table of Contents
\n*[Description](#description)
\n*[Installation](#installation)
\n*[Usage](#usage)
\n*[Contribution](#contribution)
\n*[Test](#test)
\n*[License](#license)
\n==========================================================
\n## Description
\n*Describe your project. What it is, Why it exists, and how it works.*
\n${description}
\n==========================================================
\n## Installation Instructions
\n*Write the steps required to install the project and how to get the development environment running.*
\n${installation}
\n==========================================================
\n## Usage
\n*Write your instructions and examples of use.*
\n${usage}
\n==========================================================
\n## Contribution
\n*Give instructions on how to contribute it*
\n${contributing}
\n==========================================================
\n## Test
\n*Tests for application and how to run them.*
\n${test}
\n==========================================================
\n## License
\n${license}
\n==========================================================
\n## Questions
\nMy GitHub Username: ${username}
\nClick [here](https://github.com/${username}) to go to my GitHub Profile.
\nEmail me at [${email}](mailto:${email}) if you have any questions.`

// // TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((data) => fs.writeFileSync('README.md', writeToFile(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// // Function call to initialize app
init();
