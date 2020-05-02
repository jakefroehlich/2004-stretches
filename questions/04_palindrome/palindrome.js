/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (value) => {
  if (typeof value !== 'string') {
    value = value.toString();
  }

  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let valueArray = value.split('');

  valueArray.reduce(char => {
    if (letters.includes(char)) {
      return char;
    }
  })

  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] !== valueArray[valueArray.length - (1 + i)]) {
      return false;
    }
  }

  return true;
};

module.exports = { validPalindrome };
