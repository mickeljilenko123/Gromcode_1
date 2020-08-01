'use strict'

function increaseEvenEI(arr, delta) {
    let resA = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            arr[i] += delta;
            resA = arr;
            resA.push();
        }
    }
    return resA;
}
console.log(increaseEvenEI([2, 4, 6, 7, 9], 2));