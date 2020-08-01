'use strict'


const arr = [1, 2, 4, 5];
const squareArray = function(arr) {

    for (let i = 0; i < arr.length; i += 1) {
        arr[i] *= arr[i];

    }
    return arr;

}
console.log(squareArray(arr));