const getParsedIntegers = arr => arr
    .map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = arr => arr
    .map(elem => parseInt(elem));

const getParsedFloats = arr => arr
    .map(elem => Number.parseFloat(elem));

const getParsedFloatsV2 = arr => arr
    .map(elem => parseFloat(elem));


const numberList = [77, '39', '45.9txt', Infinity, null, NaN, undefined];

console.log(getParsedIntegers(numberList));
console.log(getParsedIntegersV2(numberList));
console.log(getParsedFloats(numberList));
console.log(getParsedFloatsV2(numberList));
