'use strict'

const user = {
    name: 'John Doe',
    age: 17,
    interest: 'footbool',
}
const concatProps = user => {
    let arr = [];
    for (const key in user) {
        arr.push(user[key]);
        // arr = arr.concat(obj[key]);
    }
    return arr;
}
console.log(concatProps(user));