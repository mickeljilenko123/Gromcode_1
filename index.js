'use strict'

const filterNames = (arr, text) => {
    // return arr.filter(name => (name.length > 5) && (name === text))
    return arr.filter(str => str.indexOf(text) !== -1 && str.length > 5);
};

console.log(filterNames(['Roman', 'Nick', 'Samuel', 'Emmanuel', 'Alexandra'], 'an'));