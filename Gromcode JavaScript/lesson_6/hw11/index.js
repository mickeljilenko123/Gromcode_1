const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) return null;
    const result = [];
    arr.forEach(elem => {
        if (elem % 2 === 0) {
            result.push(elem + delta);
        }
    });
    return result;
}

console.log(increaseEvenEl([1, 2, 66, 100], 10));