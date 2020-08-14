const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(2),
];
// const numberArr = [1.2340];

console.log(multiRound(1.234));