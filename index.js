const numbers = [2, 26, 5, 44];

function squareArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= numbers[i];


    }
    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers;
}
console.log(squareArray(numbers));