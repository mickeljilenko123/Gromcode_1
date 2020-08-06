const getFiniteNumbers = arr => [...arr].filter(item => Number.isFinite(item));
const getFiniteNumbersV2 = arr => [...arr].filter(el => isFinite(el));
const getNaN = arr => [...arr].filter(el => Number.isNaN(el));
const getNaNV2 = arr => [...arr].filter(el => isNaN(el));
const getIntegers = arr => [...arr].filter(el => Number.isInteger(el));



console.log(getFiniteNumbers(['15', 3, 'text', 9]));
console.log(getFiniteNumbersV2(['15', 3, 'text', 9]));
console.log(getNaN(['15', 3, 'text', 9]));
console.log(getNaNV2(['15', 3, 'text', 9]));
console.log(getIntegers(['15', 3, 'text', 9]));