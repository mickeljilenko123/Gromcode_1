function sum(from, to) {
    let getSum = 0;
    for (let i = from; i <= to; i++) {
        console.log(getSum);
        getSum += i;
    }
    return getSum;
}

// sum(1, 5);

function compareSums(a, b, c, d) {
    // let sum1 = (a, b);
    // let sum2 = (c, d);
    if (sum(a, b) > sum(c, d)) {
        console.log(sum(a, b));
        return true;
    }
    else {
        return false;
    }
    // sum(sum1, sum2);
}


compareSums(2, 5, 1, 2);
