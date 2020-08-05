//algo
//1. gather all args
//2. multiply

// const multiply = function(...args) {
//     let res = 1;
//     args.forEach(el => {
//         res = res * el;
//     });
//     return res;
// };
// console.log(multiply(1, 2, 5));


// const multiply = function(...args) {

//    const res = args.reduce((count, el) => {
//         console.log(count);
//         return res * el;
//     });
//     return res;
// };
// console.log(multiply(1, 2, 5));


const multiply = (...args) => args.reduce((count, el) => res * el);

 console.log(multiply(1, 2, 5));