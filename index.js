//calc(3).add(2).mult(4).div(10).substract(5).result();
const calc = (initialValue) => {
    let result = initialValue;
    const calculator = {
        add(value) {
            result += value;
            return this;
        },
        mult(value) {
            result *= value;
            return this;
        },
        subtract(value) {
            result -= value;
            return this;
        },
        div(value) {
            result /= value;
            return this;
        },
        result() {
            return result;
        },
    };
    return calculator;
};
const result = calc(5).add(20).div(43).result();
export { calc };