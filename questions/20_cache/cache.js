// see test specs

function cache(func) {
  if (typeof func != 'function') {
    throw new Error('Input must be a function.');
  };

  let cache = {};

  return function (arg) {
    let args = [...arguments];
    if (arguments.length > 1 && !cache[args]) {
      cache[args] = func(...arguments);
      return cache[args];
    }
    else if (arguments.length > 1) {
      return cache[args];
    };

    if (!cache[arg]) {
      cache[arg] = func(arg);
      return cache[arg];
    }
    else {
      return cache[arg];
    };
  };
}


module.exports = { cache };
