export const getAdults = obj => {
    let a = {};
    for (let key in obj) {
        // console.log(name)
        if (obj[key] >= 18) {
            // console.log(obj)
            a[[key]] = obj[key];
        }
    }
    return a;
}

const names = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
};

const result = getAdults(names);

console.log(result);