const mergeObjectsV1 = (obj1, obj2) => {
    const result = Object.assign({}, obj1, obj2);
    return result;
};

const mergeObjectsV2 = (obj1, obj2) => {
    const result = Object.assign({}, obj2, obj1);
    return result;
};

const mergeObjectsV3 = (obj1, obj2) => {
    const result = {...obj1, ...obj2};
    return result;
};

const mergeObjectsV4 = (obj1, obj2) => {
    const result = {...obj2, ...obj1};
    return result;
};

// const mergeObjectsV4 = (obj1, obj2) => {
//     let clonedObj1 = {...obj1};
//     let clonedObj2 = {...obj2};
//     const result = Object.assign({}, clonedObj2, clonedObj1);

//     return result;
// };

const user1 = {
    name: 'Bob',
    age: 17,
};

const user2 = {
    name: 'Patrick',
    student: false,
};

// console.log(mergeObjectsV1(user1, user2));
// console.log(mergeObjectsV2(user1, user2));
// console.log(mergeObjectsV3(user1, user2));
// console.log(mergeObjectsV4(user1, user2));
