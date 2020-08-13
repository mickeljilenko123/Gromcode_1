// const user = {
//     name: 'John',
//     sayHi(age, message) {
//         console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//     }
// }

// const func = user.sayHi;

// func.apply(user, [17, 'Hello']);


const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

callbackPrompt.showDeferredPrompt(1000);

export { callbackPrompt };