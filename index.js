const mult = a => b => a * b;
const add3 = mult(3);
const res = add3(5);
console.log(res);

const twice = a => a + a;
const add4 = twice(4);
console.log(add4);

const triple = a => a + a + a;
const add5 = triple(2);
console.log(add5);