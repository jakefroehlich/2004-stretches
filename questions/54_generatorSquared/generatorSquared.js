// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here

function* squaredGen(i, j) {
    if (i ^2 <= j^2) {
        yield i^2;
    }
    return true;
}

module.exports = { squaredGen };
