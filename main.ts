#!/usr/bin/env node
import inquirer from "inquirer";
let user_answer = await inquirer.prompt([
  {
    name: "words",
    type: "input",
    message: "please enter your words",
  },
]);
let result = user_answer.words.trim().split(" ").length;
console.log(`You have total ${result} words.`);
