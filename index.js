// const user = {
//     name: 'John',
//     sayHi(age, message) {
//         console.log(`${message}. I'm ${this.name}. I'm ${age} years old`);
//     }
// }

// const func = user.sayHi;

// func.apply(user, [17, 'Hello']);


// const callbackPrompt = {
//     message: 'Tell me your number',
//     showPrompt() {
//         const num = prompt(this.message);
//         console.log(num);
//     },
//     showDeferredPrompt(ms) {
//         setTimeout(this.showPrompt.bind(this), ms)
//     }
// };
// callbackPrompt.showDeferredPrompt(1000);

/* ===> 1 <=== */
const student = {
    name: 'Tom',
};

export function sayName() {
    console.log(this.name);
}


// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
// ... your code here
const say1 = sayName.bind(student);
say1();

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// ... your code here

const say = sayName.bind({ name: 'Bruce' });
say();

/* ===> 2 <=== */
const company = {
    companyName: 'Microsoft'
};

export function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

// вызовите ф-цию greeting так, чтобы в консоль вывелось 
// 'Hello, Bob Marley. Welcome to the Microsoft'

// используйте объект company
const reggie = greeting.bind(company, 'Bob', 'Marley');

reggie()

/* ===> 3 <=== */
const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv'
};

export function getPopulation(population) {
    console.log(`Population in ${this.countryName} is ${population}`);
}

const pop = getPopulation.bind(country, [43000]);
pop();

// вызовите ф-цию getPopulation так, чтобы она вернула 
// 'Population in Ukraine is 43000'
// 43000 передавайте в виде числа
// используйте объект country
// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// ... your code here



/* ===> 4 <=== */
const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    }
}

const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
const func = transaction.printTransaction.bind(anotherTransaction);
func();