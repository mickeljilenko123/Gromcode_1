function reverseArray(arr) {
    let reverseArrays = [];

    for (let i = 1; i <= arr.length; i++) {
        reverseArrays.push(arr[arr.length - i]);
    }

    if (!Array.isArray(arr)) {
        return null;
    }

    return reverseArrays;
}

console.log(reverseArray([1, 2, 3]));