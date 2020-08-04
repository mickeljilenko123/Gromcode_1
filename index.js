const reverseArray = numbers =>
    numbers.slice().reverse();
if (!Array.isArray(Array)) null;
const arr = [1, 4, 6, 12, 43, 7];

console.log(reverseArray(arr));
console.log(arr);