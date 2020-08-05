const increaseEvenEI = (arr, delta) =>
    arr.map(el => el % 2 === 0 ? el + delta : el);
console.log(increaseEvenEI([2, 5, 6, 7, 8], 20));