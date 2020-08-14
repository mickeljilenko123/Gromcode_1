const checkSum = arr => {
    if (!Array.isArray(arr)) return null;
    let res = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(res)
    if (res > 100) {
        return true;
    } else {
        return false;
    }
}

const numbersArr = [1, 45, 200, 300];

console.log(checkSum(numbersArr));