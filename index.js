const numbers = [2, 26, 5, 44];

function checkSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (result > 100) {
            return true;
        } else {
            return false;
        }
    }
    if (!Array.isArray(arr)) {
        return null;
    }
    return result;
}
console.log(checkSum(numbers));