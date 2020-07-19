const numbers = [4, 10, 50, 100, 1000, 2];

function checker(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    if (!Array.isArray(arr)) {
        return null;
    }
    return result > 1000;
}

console.log(checker(numbers));