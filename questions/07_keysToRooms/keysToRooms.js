/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  let keys = [];

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];

    if (keys.includes(i) || i === 0) {
      for (let j = 0; j < 1; j++) {
        let key = room[j]

        if (i !== rooms.length - 1 && !keys.includes(key)) {
          keys.push(key);
        }
        else if (i === rooms.length - 1) {
          return true;
        }
      }
    }
    else {
      return false;
    }
  }
};

module.exports = { keysToRooms };
