// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  let encrypt = '';
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890'

  let lowStr = str.toLowerCase();

  for (let i = 0; i < lowStr.length; ++i) {
    let current = lowStr[i];

    let idx = letters.indexOf(current) || numbers.indexOf(current)

    if(idx === -1) {
      throw new Error;
    }

    let crypt = letters[idx + shift];


  }

  return encrypt;
};

module.exports = { encryptString };
