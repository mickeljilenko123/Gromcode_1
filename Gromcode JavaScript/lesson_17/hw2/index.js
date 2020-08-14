// const timer = {
//     secondsPassed: 0,
//     minsPassed: 0,
//     starter: 0,
//     startTimer() {
//         // console.log(setInterval(this.secondsPassed, 5000));
//         // alert(setInterval(this.secondsPassed === 5000));

//         this.starter = setInterval(() => {
//             if (this.secondsPassed === 60) {
//                 this.secondsPassed = 0;
//                 this.minsPassed++;
//             }
//             // console.log(this.secondsPassed)
//             // console.log(this.minsPassed)
//             this.secondsPassed += 5;
//         }, 5000);
//     },

//     getTime() {

//         if (this.secondsPassed >= 10) {
//             console.log(`${this.minsPassed}:${this.secondsPassed}`);
//             // return `${this.minsPassed}:${this.secondsPassed}`;
//         } else {
//             console.log(`${this.minsPassed}:0${this.secondsPassed}`);
//             // return `${this.minsPassed}:${this.secondsPassed + '0'}`;
//         }
//     },

//     stopTimer() {
//          console.log(clearInterval(this.startTimer()));
//         clearInterval(this.starter);
//     },

//     resetTime() {
//         // console.log(this.secondsPassed)
//         this.secondsPassed = 0;
//         this.minsPassed = 0;
//     }
// };


const formatSeconds = seconds => {
    if (seconds < 10) {
        return `0${seconds}`
    }
    return seconds;
};
export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    _interval: null,
    startTimer() {
        this._interval = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    stopTimer() {
        clearInterval(this._interval);
        this._interval = null;
    },
    resetTimer() {
        this.stopTimer();
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
    getTime() {
        const formattedSeconds = formatSeconds(this.secondsPassed);
        return `${this.minsPassed}:${formattedSeconds}`;
    }
};

// timer.startTimer();
// timer.getTime();

