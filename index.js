'use strict'
const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) return null;
    const result = [];
    arr.map(num => {
        if (num % 2 === 0) {
            result.push(num + delta);
        }
    });
    return result;
}

console.log(increaseEvenEl([1, 2, 66, 100], 10));