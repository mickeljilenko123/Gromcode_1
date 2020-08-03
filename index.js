const getAdults = obj => {
    let resA = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            resA[key] = obj[key];
        };
    };
    return resA;
};
const obj1 = { 'Ann': 19, 'Tom': 17, 'Bob': 20 }
console.log(getAdults(obj1));