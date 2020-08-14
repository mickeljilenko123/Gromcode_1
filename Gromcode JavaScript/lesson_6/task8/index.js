
const swap = arr => {
    const [start, ...rest] = arr;
    return [...rest, start];
}

const numbersArr = ['html', 'css', 'JS'];

const getArr = swap(numbersArr);

console.log(getArr);

