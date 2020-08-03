'use strict'


const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};

const addPropertyV2 = (obj, key, value) => {
    const result = Object.assign(obj, {
        [key]: value
    });
    return result;
};

const addPropertyV3 = (obj, key, value) => {
    const result = Object.assign({}, obj, {
        [key]: value
    });
    return result;
};

const addPropertyV4 = (obj, key, value) => {
    const result = Object.assign({...obj }, {
        [key]: value
    });
    return result;
};

const user = {
    name: 'Tom',
};

console.log(addPropertyV1(user, 'age', 17));
console.log(addPropertyV2(user, 'age', 17));
console.log(addPropertyV3(user, 'age', 17));
console.log(addPropertyV4(user, 'age', 17));