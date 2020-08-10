const obj1 = {
    name: "Diego",
    age: 33,
    country: "Costa Rica",
};

const obj2 = {
    name: "Diego",
    age: 33,
    country: "Costa Rica",
};
const compareObjects = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    };
    let bool = true;
    keys1.forEach((key, index) => {
        if (obj1[key] !== obj2[keys2[index]]) {
            return false;
        }
    });
    return bool;

};

console.log(compareObjects(obj1, obj2));