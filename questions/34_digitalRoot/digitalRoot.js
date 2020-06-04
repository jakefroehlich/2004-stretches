/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

class digitalRoot {

    root(num) {
        if (num < 9 ) {
            return num;
        }
        else {
            let stringNum = num.toString();
            let sum = 0;
            
            for (let i = 0; i < stringNum.length; ++i) {
                let currentNum = stringNum[i];

                sum += parseInt(currentNum);
            }
            
            return this.root(sum);
        }
    }
}

module.exports = { digitalRoot };
