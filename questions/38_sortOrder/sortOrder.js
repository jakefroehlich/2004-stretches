/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(array, key, returnKey) {

  let helperObj = {};

  for (let i = 0; i < array.length; ++i) {
    let obj = array[i];

    for (let objKey in obj) {
      if (objKey == key) {
        helperObj[obj[key]];
      }
      else {
        helperObj[obj[key]] = obj[objKey]
      }
    }
  }

  let sorted = helperObj.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  console.log(sorted)
}

module.exports = { sortOrder };
