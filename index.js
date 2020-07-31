'use strict'
const cloneArr = (arr) => {
    if (!Array.isArray(arr)) return null;
    const result = [];
    const copy = arr.slice();
    copy.map(num => {
        result.push(num);

    });
    return copy;
}

console.log(cloneArr([1, 2, 66, 100]));