let memory = 0;

function add(num) {
    memory += num;
};

function decrease(num) {
    memory -= num;
};

function reset(num) {
    memory = num;
};

function getMemo(num) {
    return memory;
};

// console.log(add(4));
// console.log(decrease(4));
// console.log(reset(4));
// console.log(getMemo(4));