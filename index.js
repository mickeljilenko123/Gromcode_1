//input: obhect, string
//output: object

function addPropertyV1(urerData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {
    Object.assign(userData, { id: userId });
    return userData;
}

function addPropertyV3(userData, userId) {
    return Object.assign({}, userData, { id: userId });

}

function addPropertyV4(urerData, userId) {
    const userDataCopy = {...userData };
    console.log(userDataCopy);
}

// function addPropertyV5(urerData, userId) {
//     const userDataCopy = {...userData };
//     console.log(userDataCopy);
// }


const obj = {
    name: 'Andrey',
    age: 100,
    city: 'test'
}

console.log(addPropertyV1(obj, '22222'));
console.log(obj);
console.log(addPropertyV2(obj, '33333'));
console.log(obj);
console.log(addPropertyV3(obj, '44444'));
console.log(obj);
console.log(addPropertyV4(obj, '55555'));
console.log(obj);