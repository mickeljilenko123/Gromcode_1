function getSubArray(arr, n) {
    let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

console.log(getSubArray([1, 2, 3, 4], 2));