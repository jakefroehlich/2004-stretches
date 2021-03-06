//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  let finalObj = {};
  let path = '';

  for (let key in obj) {
    if (typeof obj[key] !== 'object' || Array.isArray(obj[key])) {
      finalObj[path] = obj[key];
    }
    else {
      path += `${key}/`
      return directory(obj[key]);
    }
  }
  
  return path; 
};

module.exports = { directory };
