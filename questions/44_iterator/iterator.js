// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  constructor(array) {
    if (!Array.isArray(array)) {
      throw new Error('Arg must be an array!')
    }
    else {
      this.array = array;
      this.index = -1;
    }
  }

  next() {
    this.index ++;

    return {
      done: this.index >= this.array.length ? true : false,
      value: this.array[this.index]
    }
  }
}

'hello!'

module.exports = { Iterator };
