let memory = 0;

export function add(num) {
    memory += num;
};

export function decrease(num) {
    memory -= num;
};

export function reset() {
    memory = 0;
};

export function getMemo() {
    return memory;
};

// console.log(add(4));
// console.log(decrease(4));
// console.log(reset(4));
// console.log(getMemo(4));