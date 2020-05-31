const findBy = (array, key, value) => {

  let found = array.find(obj => {
    return obj[key] === value;
  })
  
  return found;
};

module.exports = { findBy };
