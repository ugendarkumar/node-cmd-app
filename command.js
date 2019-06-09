#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addAdvocate,
  juniorAdvocate,
  addState,
  addCase,
  blockCase,
  listAdvocates
} = require('./app');

const questions = require('./question');
const data = require('./data.json')
const fs = require('fs');


// set data.json if array not exist

let checkArray = (data.advocates) ? null :
  data.advocates = []
fs.writeFileSync('./data.json', JSON.stringify(data));





program 
  .version('1.0.0')
  .description('Advocate Management System')

// Add Advocate
program
  .command('input:1')
  .alias('a')
  .description('Add an advocate')
  .action(() => {
    prompt(questions.inputOne).then(answers => addAdvocate(answers));
  });

// Find Junior Advocate
program
  .command('input:2')
  .alias('junior')
  .description('add junior advocate')
  .action(() => {
    prompt(questions.inputTwo).then(answers => juniorAdvocate(answers));
  });

// Add practicing state
program
  .command('input:3')
  .alias('state')
  .description('Add practicing state')
  .action(_id => {
    prompt(questions.inputThree).then(answers => addState(answers));
  });

// Add case
  program
  .command('input:4')
  .alias('case')
  .description('Add case')
  .action(_id => {
    prompt(questions.inputFour).then(answers => addCase(answers));
  });

// Block case
program
  .command('input:5')
  .alias('case')
  .description('Block case')
  .action(_id => {
    prompt(questions.inputFive).then(answers => blockCase(answers));
  });

  // List all advocates for the state
program
.command('input:6')
.alias('case')
.description('Block case')
.action(_id => {
  prompt(questions.inputSix).then(answers => listAdvocates(answers));
});

program.parse(process.argv);