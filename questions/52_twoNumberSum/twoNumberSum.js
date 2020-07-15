// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

const twoNumberSum = (array, target) => {

  let idx

  for (let i = 0; i < array.length; ++i) {
    let element = array[i];

    if (array.includes(Math.abs(element - target))) {
      idx = array.indexOf(Math.abs(element - target)) 
      
      return [element, array[idx]]
    }
    else if (array.includes(target - element)) {
      idx = array.indexOf(target - element) 

      return [element, array[idx]]
    }
  }
};

module.exports = { twoNumberSum };
