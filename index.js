'use strict'
const arr = [1, 4, 6, 8, 9];
let delta = 20;

function increaseEvenEI(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] *= delta;
        }
        result.push(arr[i]);
    }
    return result;
}
const rrr = increaseEvenEI(arr);
console.log(rrr);