'use strict'
const array = [1, 4, 7, 'Polya']
const getKeys = array => {
    let obj = {};
    array.forEach(key => {
        obj[key] = key
    });
    return obj;
};
console.log(getKeys(array));