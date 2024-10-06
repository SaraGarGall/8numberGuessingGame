import inquirer from 'inquirer';
export function randomIntNumber() {
  const min = 1;
  const max = 100;
  return Math.round(Math.random() * (max - min) + min);
  /*It returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.*/
}

export async function checkTheGuessedNumber() {
  let random = randomIntNumber();
  let attempt;

  const validateNumber = n => {
    if (n >= 1 && n <= 100) {
      return true;
    } else {
      return 'The number has to be an integer between 1 and 100 (inclusive)';
    }
  };

  do {
    attempt = await inquirer.prompt([
      {
        type: 'number',
        name: 'number',
        message:
          'What is the hiden number between 1 and 100? Enter your guess:',
        validate: validateNumber
      }
    ]);

    if(attempt.number > random){
      console.log('It is a lower number')
    } else{
      console.log('It is a higher number');
    }

  } while (random !== attempt.number);

  console.log("right number:", attempt.number);
  return attempt;
}
