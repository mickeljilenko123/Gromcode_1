
function getPrimes(num) {
    // if (num === 1) {
    //     return false;
    // }
    next: 
    for (let i = 2; i <= num; i++) {
        for (let k = 2; k < i; k++) {
            if (i % k === 0) {
                continue next;
            }
        }
        console.log(i);
    }
}

// getPrimes(30);
