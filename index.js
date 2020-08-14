export function sumOfSquares() {
    return [].reduce.apply(arguments, [(acc, elem) => {
        elem = elem * elem;
        return acc + elem;
    }, 0]);
}
console.log(sumOfSquares(1, 3, 4));