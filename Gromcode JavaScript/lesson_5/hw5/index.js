function findDivCount(a, b, n) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            // sum += i;
            sum++;
            // console.log(sum.length);
            // console.log(sum);
            // sum += i;
        }
    }
    // console.log(sum);
    return sum;
}

findDivCount(1, 13, 3);