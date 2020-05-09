// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides, total) {
    if (typeof sides !== 'number' || sides <= 0) {
      throw error;
    }

    if (typeof total !== 'number' || total <= 0) {
      throw error;
    }

    this.total = total
    this.sides = sides
    
    this.history = []
  }

  roll() {
    let rollArray = [];

    for (let i = 0; i < this.total; i++) {
      rollArray.push(Math.ceil(Math.random() * this.sides));
    }

    this.history.push(rollArray)

    return rollArray;
  }
}

module.exports = { DiceRoller };

const filePath = 'thisFile.file'
const promise1 = new Promise((resolved, rejected) => {
  readFile(filePath, (err, data) => {
    if (err) {
      rejected(err);
    }
    else {
      resolved(data);
    }
  })
})

promise1.then((data) => {
  callback(data);
})
.catch(err => {
  console.error(err);
})