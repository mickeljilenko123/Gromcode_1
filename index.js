const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    // startTimer() {
    //     const adder = function() {
    //         console.log(this);
    //         this.secondsPassed++;
    //     };
    //const adderBinded = adder.bind(this);
    //setInterval(adderBinder, 1000);
    // }
    startTimer() {
        setInterval(() => {
            console.log(this);
            this.secondsPassed += 1;
        }, 1000);
    },
    getTime() {

    }
    reset() {

    }
}


// setTimeout(() => {
//     console.log('hello');
// }, 2000);
// setInterval(() => {
//     console.log(this.secondsPassed);
// }, 60);


// const user = {
//     name: 'Text',
//     run() {
//         console.log(this);
//     }
// }
// user.run();

// function printer(func) {
//     console.log('I am running');
//     func();
// }
// const func = user.run;
// printer