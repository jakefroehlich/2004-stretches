//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  let numerals = '';

  if (num <= 0 || num > 3999) {
    throw Error;
  }


  if (num % 10 !== 0) {
    if (num == 1) {
      numerals += 'I';
      return numerals;
    }
    else if (num < 4) {
      numerals += 'I';
      num--;
      romanInteger(num);
    }
    else if (num == 4) {
      numerals += 'IV'
      num -= 4;
      romanInteger(num);
    }
  //   else if (num < 10 && !numerals.includes('V')) {
  //     numerals += 'V'
  //     romanInteger(num);
  //   }
  //   else if (num < 10) {
  //     numerals += 'I';
  //     num --;
  //     romanInteger(num);
  //   }
  //}
};

module.exports = { romanInteger };
