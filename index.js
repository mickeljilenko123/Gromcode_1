//hoisting example 1
console.log(message);
var message = 'Hoisting is here!';


//hoisting example 2
var a = 55;
console.log(a);

if (a) {
    let a = 1;

    console.log(a);
}

console.log(a);


//hoisting example 3
var a = 77;
console.log(a);

function print() {
    let a = 2;
    console.log(a);
}
print();

console.log(a);