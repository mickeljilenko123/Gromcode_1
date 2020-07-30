const sortDesc = numbers => {
    const copy = numbers.slice();
    return copy.sort((a, b) => b - a);
};

const arr = [2, 57, 7, 67, 90, 6, 14];

console.log(sortDesc(arr));
console.log(arr);