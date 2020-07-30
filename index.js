const sortArray = numbers => {
    function sompare(a, b) {

        return a < b ? 1 : -1;
    }
    numbers.sort(sompare);

    return numbers;
};

const arr = [2, 57, 7, 67, 90, 6, 14];

console.log(sortArray(arr));