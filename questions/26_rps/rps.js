//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  constructor() {
    this.players = [...arguments];
  }

  play() {
    for (let i = 0; i < arguments.length; i++) {
      let currentPlay = arguments[i];
      let nextPlay = arguments[i + 1];

      if (currentPlay == 'Rock' && nextPlay == 'Scissors') {
        return `${currentPlay} defeats ${nextPlay}, ${this.players[0]} wins this round.`
      }
      else if (currentPlay == 'Scissors' && nextPlay == 'Rock') {
        return `${currentPlay} defeats ${nextPlay}, ${this.players[1]} wins this round.`
      }
    }


  }

}



module.exports = { RPS };
