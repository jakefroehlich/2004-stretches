const fizzBuzz = (num) => {
  if (typeof num !== 'number' || num < 0 || !(Number.isInteger(num))) {
    throw Error;
  }

  let array = [];

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    }
    else if (i % 5 === 0) {
      array.push('Buzz');
    }
    else if (i % 3 === 0) {
      array.push('Fizz');
    }
    else {
      array.push(num)
    }
  };

  return array;
}
module.exports = { fizzBuzz };
