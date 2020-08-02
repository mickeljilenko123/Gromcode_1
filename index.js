'use strict'


const person = {
    name: 'Tom',
    age: 17,
};

const getKeys = obj => {
    const keysArr = Object.keys(obj);
    const newArr = keysArr.forEach(elem => {
        console.log(elem)
    });
    return newArr;
};

getKeys(person);