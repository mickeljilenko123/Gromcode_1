'use strict'

//Перебрать все значения єтого массива
// И записать в обьект
const tranformToObject = arr => {
    let obj = {};

    arr.forEach(element => {
        obj[element] = element
    });

    return obj;
};
const arr = ['a', 17.1, 'John Doe']

const result = tranformToObject(arr)
console.log(result);