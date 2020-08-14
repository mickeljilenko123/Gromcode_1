const users = {
    'Tom': 18,
    'Donna': 22,
    'Jack': 15,
};

const getAdults = userObj => Object.entries(userObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAdults(users));