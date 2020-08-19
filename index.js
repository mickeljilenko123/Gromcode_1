// const timer = {
//     secondPassed: 0,
//     minsPassed: 0,
//     intervalId: null,

//     startTimer() {
//         this.intervalId = setInterval(() => {
//             console.log(this);
//             this.secondPassed += 1;

//             if (this.secondPassed === 60) {
//                 this.minsPassed += 1;
//                 this.secondPassed = 0;
//             }

//         }, 1000);

//     },
//     stopTimer() {
//         clearInterval(this.intervalId);
//     },
//     getTime() {

//     },
//     reset() {

//     }
// }

// timer.startTimer();
// // timer.stopTimer();

export function setButton() {
    const setBut = document.querySelector('body');
    setBut.innerHTML = '<button>buttonText</button>';
    console.log(setBut);
}
setButton();