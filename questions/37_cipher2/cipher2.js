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
};
module.exports = { decypher };
