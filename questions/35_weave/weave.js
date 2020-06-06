// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

function weave() {
  let newArray =[];
  let current = 0;

  for (let i = 0; i < arguments.length; i++) {
    let array = arguments[i];
    let nextArray = arguments[i + 1];

    if (!Array.isArray(array)) {
      throw new Error;
    }

    for (let j = 0; j < array.length; j++) {
      let elem = array[j];
      let nextElem = nextArray[j];

      if (elem && nextElem) {
        newArray.push(elem);
        newArray.push(nextElem);
      }
      else if (!elem && nextElem) {
        newArray.push(null);
        newArray.push(nextElem);
      }
      else if (elem && !nextElem) {
        newArray.push(elem);
        newArray.push(null);
      }  
    }
  }

  return newArray;
};

module.exports = { weave };
