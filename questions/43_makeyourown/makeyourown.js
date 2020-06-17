// Make your own stretch
// try to solve for a challenging problem
// write at minium three test specs
// Jest documentation: https://github.com/sapegin/jest-cheat-sheet
// submit the stretch with solution code and test specs passing

class Farmville {
  constructor() {
    this.crops = {};
    this.cash = 0;
    this.size = 'small';
    this.anmials = {};
    this.purchased = {};
  }

  plant(crop, num) {
    if (typeof crop !== 'string' || typeof num !== 'number') {
      throw new Error('Crops must be strings and num must be a number!')
    }

    if (this.purchased[crop]) {
      if (num <= this.purchased[crop]) {
        this.crops[crop] = num;
        this.purchased[crop] -= num;
      }
      else {
        return 'Number entered is larger than seeds bought!'
      }
    }
    else {
      return 'You have to buy that plant first!'
    }
  }

  husband(animal) {

  }

  grow(thing) {

  }

  harvest(crop) {

  }

  bank() {

  }

  store() {
    
  }

  buy() {

  }

  upgrade() {

  }
}

module.exports = { Farmville };
