const multiply = function() {
    let total = 1;

    for (let i = 1; i < arguments.length; i += 1) {
        arguments[i] *= arguments[i];
        total += arguments[i];
    }
    return total;
};

console.log(multiply(1, 3, 7));