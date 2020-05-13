//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (array) => {
  let intro = '********'
  let outro = '********'

  let poster = intro;
  while(array.length < 1) {
    let i = 1;
    let word = array[i];

    poster += `* ${word} *`;
    

    i++;
  }

  poster += outro;

  return poster;
};

module.exports = { movieposter };
