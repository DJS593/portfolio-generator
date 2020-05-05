const inquirer = require('inquirer');


// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(porfolioData);

// const profileDataArgs = process.argv.slice(2, process.argv.length);

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
// alternative method for writing defining variable
//const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));


  