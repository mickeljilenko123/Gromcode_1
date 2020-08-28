//calc(3).add(2).mult(4).div(10).substract(5).result();
const calc = initValue => {
    let result = initValue;
    const calculator = {
        add(value) {
            result += value;
            return this;
        },
        substract(value) {
            result -= value;
            return this;
        },
        mult(value) {
            result *= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result() {
            return result;
        }
    };
    return calculator;
};

calc(3).add(10).substract(4).mult(2).div(6).result();
export { calc }