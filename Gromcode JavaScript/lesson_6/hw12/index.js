const getSubArray = (arr, num) => {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(arr[i]);
    }
    return result;
};

console.log(getSubArray([0, 7, 44, 4, 5, 6], 3));