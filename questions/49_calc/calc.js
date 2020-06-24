// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  constructor(number) {
    if (typeof number !== 'number') {
      throw new Error ('argument must be a number!');
    }

    if (!this.result) {
      this.result = number;
    }
  }

  add(num) {
    this.result += num;
    return this;
  }

  sub(num) {
    this.result -= num;
    return this;
  }

  mul(num) {
    this.result *= num;
    return this;
  }
}

module.exports = { chainCalc };
