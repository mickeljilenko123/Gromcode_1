// const person = {
//     firstName: 'John',
//     lastName: 'Rambo',
//     hobby: 'war',
// };

// function fun() {
//     console.log(`Hello, mr.${this.firstName} ${this.lastName}`);
// };

// function bind(func, context) {
//     let rest = Array.prototype.slice.call(arguments);
//     // console.log(rest)
//     // console.log(Array.prototype)
//     return function () {
//         return func.apply(context, rest);
//     }
// };

export const bind = (func, context, ...args) => {
    return function(...targetArgs) {
        return func.call(context, ...args, ...targetArgs);
    }
}

// bind(fun, person)();
// bind(fun, person)();