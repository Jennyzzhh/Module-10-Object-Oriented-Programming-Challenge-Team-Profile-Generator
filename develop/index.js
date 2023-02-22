const fs = require('fs');
const inquirer = require('inquirer');

const body = require(`./src/body`)
const managerCard = require('./src/managerCard')
const EngineerCard = require('./src/EngineerCard')
const InternCard = require(`./src/InternCard`)


const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const team = []
let questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  }

]
// {
//   type: 'list',
//   message: 'What is your role',
//   name: 'role',
//   choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
// },
// {
//   type: 'input',
//   message: 'What is your github',
//   name: 'github',
//   when: (response) => response.role === 'Engineer',
// },
// {
//   type: 'input',
//   message: 'What is your school',
//   name: 'school',
//   when: (response) => response.role === 'Intern',
// },
// {
//   type: 'input',
//   name: 'officenumber',
//   message: 'What is your officenumber?',
//   when: (response) => response.role === 'Manager',
// 



//inquire-get data- array of constructors, make a html card 

function appendToFile(filePath, data) {
  fs.appendFile('./develop/src/index', data, (err) =>
    err ? console.error(err) : console.log('Data append to the file successfully')
  );
}

//Create a function to initialize app
function init() {
  const managerQuestion = questions;
  managerQuestion.push({
    type: 'input',
    name: 'officenumber',
    message: 'What is your officenumber?'
  })
  inquirer
    .prompt(managerQuestion)
    .then((response) => {
      console.log(response)
      const manager = new Manager(response.name, response.id, response.email, response.officenumber)
      team.push(manager)
      menu()
    }
    );
}

function addEngineer() {
  let engineerQuestion = questions;
  engineerQuestion.pop()
  engineerQuestion.push({
    type: 'input',
    name: 'github',
    message: 'What is your github?'
  })
  inquirer
    .prompt(engineerQuestion)
    .then((response) => {
      console.log(response)
      const engineer = new Engineer(response.name, response.id, response.email, response.github)
      team.push(engineer)
      menu()
    }
    );
}

function addIntern() {
  let internQuestion = questions;
  internQuestion.pop();
  internQuestion.push({
    type: 'input',
    name: 'school',
    message: 'What is your school?'
  })
  inquirer
    .prompt(internQuestion)
    .then((response) => {
      console.log(response)
      const intern = new Intern(response.name, response.id, response.email, response.school)
      team.push(intern)
      menu()
    }
    );
}

function menu() {
  inquirer
    .prompt([{
      type: 'list',
      message: 'Do you  want to add a new employee',
      name: 'role',
      choices: ['Engineer', 'Intern', 'Finish team']
    }]).then((response) => {
      if(response.role === 'Engineer'){
        addEngineer()
      }else if(response.role === 'Intern'){
        addIntern()
      }else{
        buildteam()
      }
    })
}

function buildteam() {
  console.log(team)
  let card = ""
  for(var i = 0; i < team.length; i++){
    if(team[i].getRole() === "Manager") {
      card += managerCard(team[i])
    }else if (team[i].getRole() === "Engineer") {
      card += EngineerCard(team[i])
    }else{
      card += InternCard(team[i])
    }

  }
  console.log(card)
  fs.writeFileSync("./dist/team.html", body(card))
}
// Function call to initialize app
init();
