// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe !== 'object' || typeof supplies !== 'object') {
    throw new Error ('Arguments must be objects!');
  }

  let maxNum = [];

  for (let key in recipe) {
    for (let supply in supplies) {
      if (key === supply) {
        let makeNum = supplies[supply] / recipe[key];

        if (makeNum < 1) {
          return 0;
        }

        maxNum.push(makeNum);
      }
    }
  }

  console.log(maxNum);
};

module.exports = { btownbake };
