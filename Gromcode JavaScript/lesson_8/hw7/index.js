const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};

const addPropertyV2 = (obj, key, value) => {
    const result = Object.assign(obj, {[key]: value});
    return result;
};

const addPropertyV3 = (obj, key, value) => {
    const result = Object.assign({}, obj,  {[key]: value});
    return result;
};

const addPropertyV4 = (obj, key, value) => {
    const result = Object.assign({...obj}, {[key]: value});
    return result;
};

const user = {
    lastName: 'King',
};

// console.log(addPropertyV1(user, 'firstName', 'Stephen'));
// console.log(addPropertyV2(user, 'firstName', 'Stephen'));
// console.log(addPropertyV3(user, 'firstName', 'Stephen'));
// console.log(addPropertyV4(user, 'firstName', 'Stephen'));
