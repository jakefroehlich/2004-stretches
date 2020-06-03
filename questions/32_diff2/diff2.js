// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (array) => {
    let finalArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        array.map(el => {
            if (currentEl - el === 2) {
                finalArray.push([el, currentEl])
            }
        })
    }

    console.log(finalArray)

    return finalArray.sort();
}

module.exports = { diffTwo };
