const compareObjects = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    };

    let isEqual = true;

    keys1.forEach((key) => {
        if (obj1[key] !== obj2[keys]) {
            return false;
        }
    });
    return isEqual;
};

const obg1 = {
    name: "Diego",
    age: 33,
    country: "Costa Rica",
    // hobby: 'Tenis',
};

const obj2 = {
    name: "Diego",
    age: 33,
    country: "Costa Rica",
};

console.log(compareObjects(obj1, obj2));




// const getSpesialNumbers = numbers => {
//     let spesialNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 3 === 0) {
//             spesialNumbers.push(numbers[i]);
//         }
//     }
//     return spesialNumbers;
// }
// const numbers = [1, 2, 4, 6, 9];
// const spesialNumbers = getSpesialNumbers(numbers);
// console.log(spesialNumbers);


// const getSpesialNumbers = numbers => {
//     let spesialNumbers = [];
//     numbers.forEach((num) => {
//         if (num % 3 === 0) {
//             spesialNumbers.push(num);
//         }
//     });
//     return spesialNumbers;
// }
// const numbers = [1, 2, 4, 6, 9];
// const spesialNumbers = getSpesialNumbers(numbers);
// console.log(spesialNumbers);


//========================================


// const getSpesialNumbers = numbers => {

//     const result = numbers.filter((num) => {
//         if (num % 3 === 0) {
//             return true;
//         }
//         return false;
//     });
//     return result;
// };
// const numbers = [1, 2, 4, 6, 9];
// const spesialNumbers = getSpesialNumbers(numbers);
// console.log(spesialNumbers);

// Из несортированного массива сделать сортированный
// const sortArray = numbers => {
//     function sompare(a, b) {
//         if (a > b) {
//             return 1;
//         }
//         return -1;
//     }
//     numbers.sort(sompare);
//     return numbers;
// };

// const numbers = [1, 4, 2, 3, 9];
// console.log(sortArray(numbers));


// const sortArray = numbers => {
//     let copy = [...numbers];
//     copy.sort((a, b) => a - b);
//     return copy;
// };

// const numbers = [1, 4, 2, 3, 9];
// console.log(sortArray(numbers));



//===============================
//У нас есть массив чисел и нам нужно вернуть их сумму

// [1, 2, 3, 4] => reduce(function(acc, num) {
//     return acc + num;
// }, 0);

// const getSum = (arr) => {
//     const resA = arr.reduce((acc, num) => {
//         return acc + num;
//     }, 0);
//     return resA;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(getSum(arr));


// из многомерного массива сделать плоский

// const flatArray = arr => {
//     const flatArray = arr
//         .reduce((acc, elem) => {    //На каждой итерации
//             return acc.concat(elem); мы конкатенируем массив
//         }, []);
//     return flatArray;
// }
// const arr = [1, [2, 3, 4], 5, [6]];
// console.log(flatArray(arr));

// const flatArray = arr => {
//     const flatArray = arr
//         .flat();
//     return flatArray;
// }
// const arr = [1, [2, 3, 4], 5, [6]];
// console.log(flatArray(arr));


// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => 
//['Good job, Ann' 'Good job, Bob']


//
//
// const getMessagesForPassedStudents = (allStudents, failedStudents) => {
//     const passedStudents = allStudents
//         .filter(name => !failedStudents.includes(name));
//     const messages = passedStudents
//         .map(name => 'Good job, ' + name);
//     return messages;
// };
// const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
// const failedStudents = ['Tom', 'Bob'];

// console.log(getMessagesForPassedStudents(allStudents, failedStudents));


//=====================================

// Обьект 

// const obj = {
//     name: 'Tom',
//     age: 17,
//     interest: 'football',
//     'my name': 'Bob',
//     [prop + 'name']: 'value'
// };

// // obj.age = 18;
// // console.log(obj.age);

// console.log(obj['my name']);

//нам нужно массив преобразовать в обьект
// Нужно пройтись по массиву и сложить все свойства в обьект
// const transformToObject = arr => {
//     let obj = {};
//     arr.forEach(el => { //Перебираем массив 
//         obj[el] = el * 2;
//     });
//     return obj;

// };
// const arr = [17, 2, 3, 5, 6, 8]
// const result = transformToObject(arr);
// console.log(result);

// const obj = {
//     name: 'Tom',
//     age: 17,
// };

// const concatProps = obj => {
//     let arr = [];
//     for (let key in obj) {
//         arr = arr.concat(obj[key])
//     }
//     return arr;
// };
// console.log(concatProps(obj));


// const obj1 = {
//     name: "Diego",
//     age: 33,
//     country: "Costa Rica",
// };

// const obj2 = {
//     name: "Diego",
//     age: 33,
//     country: "Costa Rica",
// };
// const compareObjects = (obj1, obj2) => {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     };
//     let bool = true;
//     keys1.forEach((key) => {
//         if (obj1[key] !== obj2[key]) {
//             bool = false;
//         }
//     });
//     return bool;

// };

// console.log(compareObjects(obj1, obj2));


// const obj1 = {
//     name: "Diego",
//     age: 33,
//     country: "Costa Rica",
// };

// const obj2 = {
//     name: "Diego",
//     age: 33,
//     country: "Costa Rica",
// };
// const compareObjects = (obj1, obj2) => {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     };

//     return keys1.reduce((acc, key) => obj1[key] === obj2[key])
//         // let bool = true;
//         // keys1.forEach((key) => {
//         //     if (obj1[key] !== obj2[key]) {
//         //         bool = false;
//         //     }
//         // });
//         // return bool;
//         //Method some
//         // return !keys1.some(key => obj1[key] !== obj2[key]);

// };

// console.log(compareObjects(obj1, obj2));

// const customers = {
//     'customer-id-1': {
//         name: 'William',
//         age: 54
//     },
//     'customer-id-2': {
//         name: 'Tom',
//         age: 17
//     },

// };

// const getCustomerList = (obj) => {
//     console.log(Object.entries(obj));

//     Object.entries(obj).map(el => {
//         console.log(el);
//         const res = {...el[1], id: el[0] };
//         return res;
//     })

// }
// console.log(getCustomerList(customers));