const numbers = [1, 3, 1, 5];

function cloneArr(arr) {
    let [...arr1] = arr;

    if (!Array.isArray(arr)) {
        return null;
    }

    return arr1;
}

console.log(cloneArr(numbers));