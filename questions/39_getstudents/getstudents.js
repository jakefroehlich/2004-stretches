const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = name => {

  if (typeof name !== 'string') {
    throw new Error('Argument must be a string!!!');
  };

  axios.get('https://fullstack.com/api/cohort2004')
    .then(data => {
      console.log(data.data.name)
    })
};

module.exports = { getStudent };
