'use strict'

const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const copy = arr.slice();
    let result = [];
    copy.reverse().map(num => {
        result.push(num);
    });
    return copy;
}
const arr = [1, 3, 5, 75, 32, 4]
console.log(reverseArray(arr));
console.log(arr);