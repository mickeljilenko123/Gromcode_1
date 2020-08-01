'use strict'

const arr = [99, 2, 3]
const checkSum = function(arr) {
    let resA = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i += 1) {
        resA += arr[i];
        if (resA > 100) {
            return true;
        }

    }
    return false;
}
console.log(checkSum(arr));