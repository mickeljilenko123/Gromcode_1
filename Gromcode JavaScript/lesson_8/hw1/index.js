const pickProps = (obj, arr) => {
    let newObject = {};

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        newObject[key] = obj[key];
    }
    
    return newObject;
}

const someArray = ['a', 17.1, 'John Doe'];

const someObject = {
    a: 'a',
    '17.1': '17.1',
    'John Doe': 'John Doe',
};

const newObj = pickProps(someObject, someArray);

console.log(newObj);