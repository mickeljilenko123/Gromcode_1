const users = {
    'Tom': 19,
    'Ann': 16,
    'Bob': 20,
}

const players = {
    'John Doe': 19,
    'Bob': 18,
};

const copyObj = obj => Object.assign({}, obj);
console.log(copyObj(players));

// const getAdults = usersObj => Object.entries(usersObj)
// .filter(user => user[1] >= 18)
// .map(user => user[0]);

// console.log(getAdults(users));