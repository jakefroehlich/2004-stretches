// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

let counter = 0;

Array.prototype.next = function() {
    console.log(this[counter])
    counter ++;
    if (counter >= this.length) {
        counter = 0;
    }

    return this
}

// no export statement required
