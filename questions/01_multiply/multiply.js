// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if (!(num1 && num2)) {
        throw 'failure';
    }
    else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw 'failure';
    }
    
    return num1 * num2
};

module.exports = { multiply };
