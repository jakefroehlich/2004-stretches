// - "monkey-patching" means changing the behavior of built-in code at runtime.
// - your job is to monkey-patch the Array class, by adding a method called "countBy"
// - countBy should optionally take a function argument
// - countBy returns an object whose keys correspond to the elements in the array it is called on, and whose values correspond to the number of times that element appears in the array
// - when countBy is passed a function argument "fn", the values correspond to the number of times that key was returned by fn.
// - NB: monkey-patching is generally not good, do not do it, this is just an exercise
// - Also NB: repl.it doesn't let you monkey patch! but the chrome console does.

//code goes here

Array.prototype.countBy = function (fn) {
    let obj = {};

    if (fn) {
        let newArray = this.map(el => fn(el));

        for (let i = 0; i < newArray.length; i++) {
            let element = newArray[i];

            if (!(obj[element])) {
                obj[element] = 1;
            }
            else {
                obj[element]++;
            }
        }
    }
    else {
        for (let i = 0; i < this.length; i++) {
            let element = this[i];

            if (!(obj[element])) {
                obj[element] = 1;
            }
            else {
                obj[element]++;
            }
        }
    }

    return obj;
}