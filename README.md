# README-Generator
![Badge for GitHub repo top language](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen) 

Check out the badges hosted by [shields.io](https://shields.io/).

==========================================================
## Table of Contents

*[Description](#description)

*[Installation](#installation)

*[Usage](#usage)

*[Method](#method)

*[License](#license)

==========================================================

## Description

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. 

==========================================================

## Installation Instructions

To generate your own README, git clone the repo down to your local so you have the Node project on your local. 
Run npm install in order to install the following npm package dependencies as specified in the package.json. 
Inquirer will prompt you for your inputs from the command line. 
The application will start by running node index.js in the command line. 
Answer the prompts in your command line to generate the README. 
After answering all the prompts, the README has some automatically generated badges for your repo courtesy of shields.io.

==========================================================

## Usage

![Gif demo of README-generator](README-Generator-DemoGIF.gif)

When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your your project and Github Info. 
From there, the application will generate the README.txt and a table of contents for the README based on your responses to the Inquirer prompts. 
The README will also include badges for your GitHub repo. 
fs.writeFile is used to generate your project's README file.

Link to Demo Video of Application: [Demo Video](https://watch.screencastify.com/v/R4LlfpFIPFmvYvwB2oNo)

==========================================================

## Method

This application utilizes syntax from ES6:

*Arrow Functions
*Const
*Inquirer
*fs.writeFile promises


==========================================================

## License

MIT

==========================================================

## Questions

My GitHub Username: Tikimaniac77

Click [here](https://github.com/Tikimaniac77) to go to my GitHub Profile.

Email me at [michaelwachtel@yahoo.com](mailto:michaelwachtel@yahoo.com) if you have any questions.