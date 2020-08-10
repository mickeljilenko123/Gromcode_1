export const squareArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const squareNum = numbers.map(elem => elem * elem);
    return squareNum;
}


const squareNumbers = [2, 3, 4, 5, 6];

console.log(squareArray(squareNumbers));