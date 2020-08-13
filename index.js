// const user = {
//     name: 'John',
//     sayHi(age, message) {
//         console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//     }
// }

// const func = user.sayHi;

// func.apply(user, [17, 'Hello']);


// const callbackPrompt = {
//     message: 'Tell me your number',
//     showPrompt() {
//         const num = prompt(this.message);
//         console.log(num);
//     },
//     showDeferredPrompt(ms) {
//         setTimeout(this.showPrompt.bind(this), ms)
//     }
// };
// callbackPrompt.showDeferredPrompt(1000);


function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
}

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'am ${this.name}!`)
    }
}
const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: "bob" });