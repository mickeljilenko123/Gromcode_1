const numbers = [2, 26, 5, 44];

function squareArray(arr) {
    let squareResult = [];
    for (let i = 0; i < arr.length; i++) {
        squareResult.push(arr[i] *= arr[i]);
    }
    if (!Array.isArray(numbers)) {
        return null;
    }
    return squareResult;
}
console.log(squareArray(numbers));