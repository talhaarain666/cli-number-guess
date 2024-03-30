import inquirer from "inquirer";
// Generating random numbers
let randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: "
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right");
}
else {
    console.log("You guessed wrong number");
}
