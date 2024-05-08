#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let user_answer = await inquirer.prompt([
    {
        name: "words",
        type: "input",
        message: "Please enter your words:",
    },
]);
let result = user_answer.words.trim().split(" ").length;
console.log(chalk.red(`You have a total of ${result} word$.`));
