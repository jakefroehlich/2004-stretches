//Given an object of likely nested objects, where the final element is an array containing positive integers
//write a function that returns the name of the root property that a particular integer lives in.
//ie:
// object = {
//   "one": {
//       "l1": {
//           "val1": [40, 65, 113, 200]
//        }
//   },
//   "two": {
//       "l1": [45, 1, 75, 80],
//       "l2": [12, 38, 2, 15]
//   },
//   "three": {
//       "l1": [10, 92, 53, 71],
//       "l2": [82, 34, 6, 19]
//   }
// }
//getrootvalue(object,40)=>'one'
//returns -1 if value isn't found

const getrootvalue = (obj, val) => {

    for (key in obj) {
        // if (!(Array.isArray(obj[key]))) {
            
        //     getrootvalue(obj[key]);
        // }
        // else {
        //     obj[key].map(arrayVal => {
        //         if (arrayVal == val) {
        //             return obj;
        //         }
        //     })
        // }

        if (Array.isArray(obj[key])) {
            obj[key].forEach(elem => {
                if (elem == val) {
                    return key;
                }
            })
        }
        else {
            getrootvalue(obj[key]);
        }
    }

    return null;
};

module.exports = { getrootvalue };
