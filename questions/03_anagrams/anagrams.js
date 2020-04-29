// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  if (str1.length != str2.length) {
    return false
  }

  for (let i = 0; i < str1.length; i++) {
    let str1Letter = str1[i];

    if (!str2.includes(str1Letter)) {
      return false;
    }
  }
  return true;
};

module.exports = { checkAnagrams };
