const multiply = function() {
    let total = 0;

    for (let i = 0; i < arguments.length; i += 1) {
        total += arguments[i];
    }
    return total;
};

console.log(multiply(1, 3, 7));