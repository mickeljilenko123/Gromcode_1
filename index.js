const sortDesc = numbers => {
    function sompare(a, b) {
        if (a < b) {
            return 1;
        }
        return -1;
    }
    numbers.sort(sompare);

    return numbers;
};

const arr = [2, 57, 7, 67, 90, 6, 14];

console.log(sortDesc(arr));