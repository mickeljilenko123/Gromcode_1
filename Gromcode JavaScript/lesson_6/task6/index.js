const getSum = arr => {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const someArr = [25, 50, 125];

console.log(getSum(someArr));