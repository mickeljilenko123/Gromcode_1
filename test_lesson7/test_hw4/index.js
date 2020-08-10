export const sum = arr => {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum([5, 10, 20, 50]));