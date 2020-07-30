const getSpecialNumbers = numbers => {


    const result = numbers.filter(num => {
        if (num % 3 === 0) {
            return true;
        }
        return false;
    });


    return result;
};
const arr = [1, 2, 3, 4, 5, 6, 18];
console.log(getSpecialNumbers(arr));