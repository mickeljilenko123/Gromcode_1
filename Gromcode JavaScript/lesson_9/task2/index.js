const users = {
    'Tom': 22,
    'Bill': 33,
    'Rarph': 11,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(users));
// console.log(users);