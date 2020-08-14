const array = [1, 2, 3, 4];

function cloneArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const myArr = cloneArr(array);

console.log(myArr);
console.log(array);