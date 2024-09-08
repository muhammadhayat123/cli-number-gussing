

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("welcome to the number guessing game");


const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "pls guess a number between 1 to 10:",
    },
]);

if(answers.userGuessNumber === randomNumber ) {
    console.log("congradulations");
}else{
    console.log("your guess is wrong");
}

