'use strict';

function printMessage(age, city) {
    console.log(this);
    console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}
let user = {
    name: "Alex",
    email: "gmail.com",
}
const printMessageBind = printMessage.bind(100, 'Lviv');
printMessageBind(100, 'Lviv');

const myBind = (func, context, ...args) => {

}