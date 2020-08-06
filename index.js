'use strict'

const dayTransactions = [
    { userld: 22, amount: 60, operation: 'sell' },
    { userld: 22, amount: 160, operation: 'buy' },
    { userld: 44, amount: 90, operation: 'sell' },
];

const getTotalBalance = dayTransactions => {
    let total = 0;
    for (const dayTransaction of dayTransactions) {
        total += dayTransaction.amount;
    }
    console.log(total);

};
getTotalBalance(dayTransactions);