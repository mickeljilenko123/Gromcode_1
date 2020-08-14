const getKeys = obj => {
    let keysArr = Object.keys(obj);
    let newArr = keysArr.forEach(elem => {
        console.log(elem)
    });
    return newArr;
};

const alien = {
    name: 'Alf',
    born: 'Melmak',
    age: 126,
    country: 'USA',
    'favorite food': 'cats',
};

getKeys(alien);