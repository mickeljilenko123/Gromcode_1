const mainArray = [4, 10, 50, 100, 1000, 2];

function checker(arr) {
    let sumArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        console.log(sumArr);
        // console.log(arr[i]);
    }
    return sumArr > 1000;
}

const checkerArr = checker(mainArray);

console.log(checkerArr);
