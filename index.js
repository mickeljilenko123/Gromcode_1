const reverseArray = numbers =>
    numbers.slice().sort((a, b) => b - a);
const arr = [1, 4, 6, 12, 43, 7];
if (!Array.isArray(arr)) null;
console.log(reverseArray(arr));
console.log(arr);