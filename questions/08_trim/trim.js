// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  for (key in obj) {
    if (obj[key] === undefined || obj[key] === null) {
      delete obj[key];
    }
  }

  return obj;
};

module.exports = { trim };
