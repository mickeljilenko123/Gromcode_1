export const createArrayOfFunctions = (n) => {
    let arr = [];
    if (n === undefined) return arr;
    if (typeof(n) !== 'number') return null;

    for (let i = 0; i < n; i++) {
        arr[i] = () => {
            return i;
        };
    }
    return arr;
}

// createArrayOfFunctions(9);
// console.log(createArrayOfFunctions(7));