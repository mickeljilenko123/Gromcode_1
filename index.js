const squareArray = numbers => {
    let specialNumbers = [];

    numbers.forEach(num => {
        num *= num;
        specialNumbers.push(num);
    });

    // for (let i = 0; i < numbers.length; i++) {
    //     numbers[i] *= numbers[i];
    //     specialNumbers.push(numbers[i]);
    // }
    return specialNumbers;
};
let arr = [1, 4, 6, 8, 9];

console.log(squareArray(arr));