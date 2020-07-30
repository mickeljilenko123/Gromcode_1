// const sum = numbers => {
//     if (!Array.isArray(numbers)) {
//         return null;
//     }
//     let specialNumbers = 0;

//     numbers.reduce(num => {
//         specialNumbers += num;
//     });

//     // for (let i = 0; i < numbers.length; i++) {
//     //     numbers[i] *= numbers[i];
//     //     specialNumbers.push(numbers[i]);
//     // }
//     return specialNumbers;
// };
// const arr = [1, 4, 6, 8, 9];
// // const reserved = arr.reverse();
// console.log(sum(arr));



// const arr = [1, 4, 6, 8, 9];
// const squareArray = arr.map(ar => {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     return ar * ar;
// });

// console.log(squareArray);

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

const arr = [1, 3, 7]

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const [start, ...rest] = arr;

    return [...rest, start];
}
console.log(reverseArray(arr));