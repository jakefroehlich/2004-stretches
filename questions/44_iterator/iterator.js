// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
<<<<<<< HEAD
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

=======
  //write code here
}

>>>>>>> e1d7f483e8bccdd22cd1e3ba454d9c399167f4e5
module.exports = { Iterator };
