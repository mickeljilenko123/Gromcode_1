export function sumOfSquares () {
    return [...arguments].map(elem => elem * elem).reduce((acc, elem) => {
        return acc + elem;
    })
  
};

console.log(sumOfSquares(2, 3, 5, 10));

