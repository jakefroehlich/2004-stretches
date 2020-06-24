//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  if(typeof obj !== 'object') {
    throw new Error;
  }

  let idx = 0;

  for (let level in obj) {
    level.depth = idx;
    idx++;
    let values = Object.values(level)
    for (let i =0; i< values.length; i++) {
      let value = values[i];

      if (typeof value === 'object') {
        return recordDepth(value);
      }
      else {
        return level;
      }
    }
  }
};

module.exports = { recordDepth };
