function increaseEvenEl(arr, delta) {

    let evenEl = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenEl.push(arr[i] + delta);
        }
    }

    if (!Array.isArray(arr)) {
        return null;
    }

    return evenEl;
}

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));