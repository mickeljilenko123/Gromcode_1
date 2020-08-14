const getArrayBounds = arr => {
    if (!Array.isArray(arr)) return null;
    const a = [];
    a.push(arr.length, arr[0], arr[arr.length - 1]);
    return a;
}

const someArr = [1, 'era', 22, true, 'js'];

console.log(getArrayBounds(someArr));