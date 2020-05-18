//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arrayOne, arrayTwo) => {
    if (!(Array.isArray(arrayOne)) || !(Array.isArray(arrayTwo))) {
        throw new Error('One of your arguments isn\'t an array!')
    }

    const newArrayOne = [];
    const newArrayTwo = [];
    
    for (let j = 0; j < arrayOne.length + arrayTwo.length; j++) {
        arrayTwo.push(arrayOne.pop());
        console.log(arrayTwo)
    }

    for (let i = 0; i < arrayTwo.length + newArrayTwo.length; i++) {
        // newArrayTwo.push(arrayTwo.pop());
        // console.log(newArrayTwo)
    }

    arrayOne = newArrayOne;
    arrayTwo = newArrayTwo;

    return arrayOne, arrayTwo;
};

module.exports = { arrayexchange };
