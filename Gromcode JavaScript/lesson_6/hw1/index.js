const newArray = [2, 3, 5, 6];

function squareArray(arr) {
    let squareSum = [];
    for (let i = 0; i < arr.length; i++) {
        squareSum.push(arr[i] * arr[i]);
        // console.log(squareSum);

        if (!Array.isArray(arr)) {
            return null;
        }
    }
    return squareSum;
}

const squareArr = squareArray(newArray);

console.log(squareArr);
