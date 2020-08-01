'use strict'


const arr = [1, 2, 4, 5];
const squareArray = function(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const copy = arr.slice();
    let resA = 0;
    for (let i = 0; i < copy.length; i += 1) {
        copy[i] *= copy[i];
        resA = copy;
    }
    return resA;
}
console.log(squareArray(arr));