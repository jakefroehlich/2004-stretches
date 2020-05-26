// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
    this.prevState = {};
  }

  setState(update) {
    let newState = {};
    this.prevState = this.state;

    for (let key in this.state) {
      this.prevState[key] = this.state[key];
    }

    console.log('before',this.state)

    for (let key in this.state) {
      for (let updateKey in update) {
        if (key == updateKey) {
          newState[key] = update[key];
        }
        else {
          newState[key] = this.state[key];
        }
      }
    }

    console.log('after',this.state)

    return newState;
  }

  goBack() {
    return this.prevState;
  }
}

module.exports = { StatefulThing };
