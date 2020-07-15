const balanced = (array) => {
  let sumsA = [];
  let sumsB = [];
  let sumA = 0;
  let sumB = 0;

  let start = 0;

  for (let i = start; i < array.length; ++i) {
    for (let j = 0; j < array.length - i; ++j) {
      let current = array[i];
      sumA += current;
    }
    
    for (let k = array.length - i; k >= 0; --k) {
      let current = array[i];
      sumB += current;
    }

    if (sumA === sumB) {
      return i
    }
  
  }

  return -1
};

module.exports = balanced;
