<<<<<<< HEAD
<<<<<<< HEAD
const decypher = (string) => {

  let code = '';
  let thirdChar;

  let rest;

  for (let i = 0;i < string.length; i++) {
    let char = string[i];

    if (typeof char !== 'number') {
      thirdChar = char;
      rest = string.slice(i, string.length -1)
      break;
    }
    else {
      code += char;
    }
  }

  console.log(code)

  let firstChar = String.fromCharCode(parseInt(code));

  let secondChar = string[string.length -1]


  // for (let i = 0;i < string.length; i++) {
  //   let char = string[i];

  //   if (typeof char !== 'number') {
  //     thirdChar = char;
  //     rest = string.slice(i, string.length -1)
  //     break;
  //   }
  // }
  return `${firstChar}${secondChar}${thirdChar}${rest}`;
=======
const decypher = () => {
  //YOUR CODE HERE
>>>>>>> b994823313926a9c8f9f8dbf85f03796c93b727c
=======
const decypher = () => {
  //YOUR CODE HERE
>>>>>>> 323e2f0c960e34cfef6828cdb6e82618dfa16430
};
module.exports = { decypher };
