const mergeObjectsV1 = (obj1, obj2) => {
    let newObj = {};
    Object.assign(newObj, obj1, obj2);
    return newObj;
}
const mergeObjectsV2 = (obj1, obj2) => {
    let newObj = {};
    Object.assign(newObj, obj2, obj1);
    return newObj;
}
const mergeObjectsV3 = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2 };
    return newObj;
}

const mergeObjectsV4 = (obj1, obj2) => {
    let newObj = {...obj2, ...obj1 };
    return newObj;
}

const user1 = {
    name: 'Bob',
    age: 17,
};

const user2 = {
    name: 'Tom',
    student: false,
};

// console.log(mergeObjectsV1(user1, user2));
// console.log(mergeObjectsV2(user1, user2));
// console.log(mergeObjectsV3(user1, user2));
// console.log(mergeObjectsV4(user1, user2));