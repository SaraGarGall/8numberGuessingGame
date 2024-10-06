//Number Guessing Game: Write a program that uses a for loop to limit the number of attempts in a guessing game where the user tries to guess a random number.

import { randomIntNumber, checkTheGuessedNumber } from './utility.js';
/*import inquirer from 'inquirer';

const validateNumber = n => {
  if (n >= 1) {
    return true;
  } else {
    return 'Error. The number has to be greater than 0 and it cannot have decimals.';
  }
};

let input = await inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: 'What is the hiden number between 1 and 100? Enter your guess:',
    validate: validateNumber
  }
]);

let hidenNumber = randomIntNumber();*/
/*let userGuess = */checkTheGuessedNumber();
console.log('attempt:', attempt.number);
