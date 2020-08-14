const getFiniteNumbers = arr => arr
    .filter(elem => Number.isFinite(elem));

const getFiniteNumbersV2 = arr => arr
    .filter(elem => isFinite(elem));

const getNaN = arr => arr
    .filter(elem => Number.isNaN(elem));

const getNaNV2 = arr => arr
    .filter(elem => isNaN(elem));

const getIntegers = arr => arr
    .filter(elem => Number.isInteger(elem));


const numberList = [77, '39', '45.9txt', Infinity, null, NaN, undefined];

console.log(getFiniteNumbers(numberList));
console.log(getFiniteNumbersV2(numberList));
console.log(getNaN(numberList));
console.log(getNaNV2(numberList));
console.log(getIntegers(numberList));