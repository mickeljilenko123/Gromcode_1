'use strict'


const person = {
    name: 'Tom',
    age: 17,
};

const getKeys = obj => {

    const keys = Object.keys(person)
    keys.forEach(key => {
        console.log(key);
        // console.log(person[key]);
    });

}

console.log(getKeys(person));