const buildObject = (keysList, valueList) => {
    // const reducer = (accum, valu, index, arr) => accum + valu;
    let newArr = [];
    // let newObj = Object.fromEntries(newArr);
    for (let i = 0; i < keysList.length; i++) {
        newArr.push([keysList[i], valueList[i]]);
    }
    let newObj = Object.fromEntries(newArr);

    // console.log(newArr)
    return newObj;
};

const keys = ['name', 'planet', 'age'];
const values = ['Alf', 'Melmak', 126];

console.log(buildObject(keys, values));