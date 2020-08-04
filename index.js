function filterArray(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {

        const callbackRes = callback(arr[i], i, arr);
        if (callbackRes) {
            result.push(arr[i])
        }

    }

    return result;
}


//Testing


let arr = [10, 30, 1, 6];

const callback = (element) => {
    const res = element > 20;
    return res;
}

console.log(filterArray(arr, callback));


// let arr = [10, 30, 1, 6];

// const callback = (element, index, arr) => {

//     console.log(element);
//     console.log(index);
//     console.log(arr);
//     const res = element > 20;
//     return res;
// }

// filterArray(array, callback);