const arrayNumbers = [5, 7, 9, 16];

function getSum(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (!Array.isArray(arr)) {
            return null;
        }
    }
    console.log(sum)
    return sum;
}

getSum(arrayNumbers);