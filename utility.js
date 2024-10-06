export function randomIntNumber() {
  const min = 1;
  const max = 100;
  return Math.round(Math.random() * (max - min) + min);
  /*It returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.*/
}

export function checkTheGuessedNumber(n) {
  let random = randomIntNumber();

  do {
    /*pedir input al usuario*/
  } while(random !== /*input del usuario*/);
}
