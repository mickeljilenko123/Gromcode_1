function cloneArr(arr) {
    let arr1 = arr;

    if (!Array.isArray(arr)) {
        return null;
    }

    return arr1;
}

console.log(cloneArr([1, 2, 3]));