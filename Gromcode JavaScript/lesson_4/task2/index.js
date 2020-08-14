let m = 10;
let n = 20;
let result = 1;

for (let m = 10; m <= n; m++) {
    if (m % 2 === 1) {
        result *= m;
    }
}

// do {
//     if (m % 2 === 1) {
//         result *= m;
//     }
//     m++;
// } while (m <= n);

console.log("Result: " + result);
