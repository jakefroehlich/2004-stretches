const opposites = {
  n: 's',
  s: 'n',
  e: 'w',
  w: 'e',
}

const finalObj = {
  n: 0,
  s: 0,
  e: 0,
  w: 0,
}

const cartesian = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Parameter must be an array.')
  }

  for (let i = 0; i < array.length; i + 2) {
    let currentDir = array[i];
    let nextDir = array[i + 1];

    if (currentDir && nextDir) {
      if (opposites[currentDir] !== nextDir) {
        finalObj[currentDir]++
      }
    }
  }

  return finalObj;

};

module.exports = { cartesian };
