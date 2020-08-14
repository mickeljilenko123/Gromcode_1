const getSpecialNumbers = (m, n) => {
    let newArr = [];
    for (let i = m; i <= n; i++) {
        // console.log([i])
        if (i % 3 === 0) {
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(getSpecialNumbers(2, 100));