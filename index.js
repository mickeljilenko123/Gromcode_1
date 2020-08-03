//1. input: obj and array
//2. output: obj with properties(array) 
// Вернуть обьект со свойтвами указанными в массиве.
const pickProps = (obj, arr) => {
    let obj1 = {}
    arr.forEach(element => {
        if (arr === obj[element]) {
            return obj1[element] = arr[i];
        }
        console.log(obj1);
    });
    return obj1;

};
const arr = ['name', 'age'];
const obj = { name: 'Misha', age: 17, interest: 'football' }
const result = pickProps(obj, arr);
console.log(result);






const mergeObjectsV1 = (obj1, obj2) => {
    const result = Object.assign({}, obj1, obj2);
    return result;
};

const mergeObjectsV2 = (obj2, obj1) => {
    const result = Object.assign({}, obj2, obj1);
    return result;
};

const mergeObjectsV3 = (obj1, obj2) => {
    const result = {...obj1, ...obj2 };
    return result;
};

const mergeObjectsV4 = (obj2, obj1) => {
    const result = {...obj2, ...obj1 };
    return result;
};

const user1 = {
    name: 'Bob',
    age: 17,
};

const user2 = {
    name: 'Patrick',
    student: false,
};

console.log(mergeObjectsV1(user1, user2));
console.log(mergeObjectsV2(user1, user2));
console.log(mergeObjectsV3(user1, user2));
console.log(mergeObjectsV4(user1, user2));