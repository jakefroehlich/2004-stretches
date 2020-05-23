//write a function that takes a function, and makes it callable with two invocations

const extensions = (arg) => {
    let func;
    let cache = [];

    if (typeof arg == 'function') {
        func = arg;
    }
    else if (typeof arg == 'number') {
        cache.push(arg)
    }
    else {
        throw new Error;
    }

    console.log()

    if (cache.length == 2 && func) {
        return func(cache[0], cache[1])
    }

};

module.exports = { extensions };
