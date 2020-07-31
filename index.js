'use strict'

const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = [];
    arr.reverse().map(num => {
        result.push(num);
    });
    return result;
}
const arr = [1, 3, 5, 75, 32, 4]
console.log(reverseArray(arr));