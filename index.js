function checkSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    if (!Array.isArray(arr)) {
        return null;
    }

    return (result > 100);;
}
console.log(checkSum([2, 26, 5, 44]));