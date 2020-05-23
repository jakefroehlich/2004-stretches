const moveZeroes = (arr) => {

  for (let i = arr.length; i >= 0; i--) {
    let num = arr[i];

    if (num == 0) {
      arr.push(...arr.splice(i, 1))
      console.log('arr', arr)
    }
  }

  // let index = 0;

  // arr.forEach(num => {
  //   if (num == 0) {
  //     arr.push(...arr.splice(index, 1))
  //     console.log('arr', arr)
  //   }
  //   index++;
  // })

  return arr;


};

module.exports = { moveZeroes };
