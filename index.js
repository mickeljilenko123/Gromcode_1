// 1. input: obj and array
// 2. output: obj with properties(array) 
// Вернуть обьект со свойтвами указанными в массиве.
const pickProps = (obj, arr) => {
    let resA = {};
    arr.forEach(element => {
        if (obj[element]) {
            resA[element] = obj[element];
        }
    });
    return resA;

};
const arr1 = ['name', 'age'];
const obj1 = { name: 'Misha', age: 17, interest: 'football' }
const result = pickProps(obj1, arr1);
console.log(result);