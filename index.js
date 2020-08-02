'use strict'

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
    // console.log(balances[clients.indexOf(client)]);

    if (balances[clients.indexOf(client)] >= amount) {

        return (balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount);
    }

    return -1;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50));