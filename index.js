//input: obhect, string
//output: object

function addPropertyV1(urerData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(urerData, userId) {
    Object.assign(userData, { id: userId });
    return userData;
}

function addPropertyV3(urerData, userId) {
    return Object.assign({}, userData, { id: userId });

}

function addPropertyV4(urerData, userId) {
    const userDataCopy = urerData.slice();
    console.log(userDataCopy);
}


const obj = {
    name: 'Andrey',
    age: 100,
    city: 'test'
}

console.log(addPropertyV1(obj, '22222'));
console.log(obj);
console.log(addPropertyV1(obj, '33333'));
console.log(obj);
console.log(addPropertyV1(obj, '44444'));
console.log(obj);
console.log(addPropertyV1(obj, '55555'));
console.log(obj);