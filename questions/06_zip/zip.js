/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let values = {};
  objs.map(obj => {
    let keys = Object.keys(obj);

    keys.forEach(key => {
      if (!values[key]) {
        values[key] = obj[key];
      }
      else {
        values[key] += obj[key];
      } 
    });
  });

  return values;
}

module.exports = { zip };
