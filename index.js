export const createCalculator = () => {
    let memory = 0;

    function add(num) {
        // console.log(memory += num);
        memory += num;
    };

    function decrease(num) {
        // console.log(memory -= num);
        memory -= num;
    };

    function reset() {
        // console.log(memory = 0);
        memory = 0;
    };

    function getMemo() {
        // console.log(memory);
        return memory;
    };

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
};