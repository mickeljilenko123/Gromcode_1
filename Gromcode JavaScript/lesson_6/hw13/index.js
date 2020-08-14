const includes = (arr, num) => {
    const res = false;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === num) {
            return true;
        }
    return res;
}

console.log(includes([1, 2, 3, 4, 5], 55));