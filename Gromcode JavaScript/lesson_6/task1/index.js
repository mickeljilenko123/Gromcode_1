const firstArray = [1, 2, 3, 4, 5, 6];

function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    else if (arr) {
        return [arr.length, arr[0], arr[arr.length - 1]];
    }
}

let arrayBounds = getArrayBounds(firstArray);

console.log(arrayBounds);