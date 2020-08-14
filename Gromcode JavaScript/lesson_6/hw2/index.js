const mainArray = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
    // const reversed = arr.reverse();
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);

        if (!Array.isArray(arr)) {
            return null;
        }
    }
    return res;
}

const getReverseArray = reverseArray(mainArray);

console.log(getReverseArray);
