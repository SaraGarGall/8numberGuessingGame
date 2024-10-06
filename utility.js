import inquirer from 'inquirer';
export function randomIntNumber() {
  const min = 1;
  const max = 100;
  return Math.round(Math.random() * (max - min) + min);
  /*It returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.*/
}

export function checkTheGuessedNumber() {
  let random = randomIntNumber();
  console.log("random number is:", random);
  let attempt;

  const validateNumber = n => {
    if (n >= 1) {
      return true;
    } else {
      return 'Error. The number has to be greater than 0 and it cannot have decimals.';
    }
  };

  do {
    attempt = inquirer.prompt([
      {
        type: 'number',
        name: 'number',
        message:
          'What is the hiden number between 1 and 100? Enter your guess:',
        validate: validateNumber
      }
    ]);
  } while (random !== attempt.number);

  console.log("right number:", attempt.number);
  return attempt;
}
