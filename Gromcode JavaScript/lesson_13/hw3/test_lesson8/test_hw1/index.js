// input: object;
// output: array of objects

// algo
// 1. get key-value by Object.entries
// 2. map this array
// 3. sort this array 

// const getCustomersList = obj => Object.entries(obj)
//     .map(el => ({...el[1], id: el[0]}))
//     .sort((a,b) => a.age - b.age);

// const customers = {
//     'customer-id-1': {
//         name: 'William',
//         age: 54
//     },
//     'customer-id-2': {
//         name: 'Tom',
//         age: 17
//     }
// };

// console.log(getCustomersList(customers));

const adminIds = ['1', '3'];
const users = [
    { id: '1', name: 'Tom' } { id: '2', name: 'Bob' } { id: '3', name: 'Sam' } { id: '4', name: 'Ann' }
]



const markAdmins = (users, adminIds) => {
    return users.map((user) => {
        const isAdmin = adminIds.includes(user.id);
        console.log(isAdmin);
        return {...user, isAdmin: isAdmin };
    });
}
console.log(markAdmins(users, adminIds));