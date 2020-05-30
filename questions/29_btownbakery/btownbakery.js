// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe !== 'object' || typeof supplies !== 'object') {
    throw new Error ('Arguments must be objects!');
  }

  let maxNum = [];

  for (let key in recipe) {
    
      if (key in supplies) {
        let makeNum = supplies[key] / recipe[key];

        maxNum.push(Math.floor(makeNum));
      }
      else {
        return 0;
      }
    }
  

  return Math.min(...maxNum)
};

module.exports = { btownbake };
