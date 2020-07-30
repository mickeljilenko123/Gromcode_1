const squareArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let specialNumbers = [];

    numbers.map(num => {
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



// const arr = [1, 4, 6, 8, 9];
// const squareArray = arr.map(ar => {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return ar * ar;
// });

// console.log(squareArray);