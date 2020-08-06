'use strict'

const dayTransactions = [
    { userld: 22, amount: 60, operation: 'sell' },
    { userld: 22, amount: 160, operation: 'buy' },
    { userld: 44, amount: 90, operation: 'sell' },
];

const getTotalRevenue = dayTransactions => {
    let total = 0;
    dayTransactions.map((el) => {
        total += el.amount
    });

    return total;

};
const result = getTotalRevenue(dayTransactions);
console.log(result);