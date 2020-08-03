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

const resultV1 = addPropertyV1(user, 'age', 17);
console.log(resultV1);
const resultV2 = addPropertyV2(user, 'age', 17);
console.log(resultV2);
const resultV3 = addPropertyV3(user, 'age', 17);
console.log(resultV3);
const resultV4 = addPropertyV4(user, 'age', 17);
console.log(resultV4);