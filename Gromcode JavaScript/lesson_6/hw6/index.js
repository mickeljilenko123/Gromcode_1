// const nameClients = ["Nick", "Oscar", "Mark", "Kate"];

// const clientBalance = [100, 200, 50, 1000];

//         // console.log(client[i])
//         if (clients[i] === client && balances[i] > amount) {
//             return balances[i] -= amount;


function withdraw(clients, balances, client, amount) {
    for (let i = 0; i < clients.length; i++) {
        // console.log(amount[i]);
        if (clients[i] === client) {
            if (balances[i] > amount) {
                return balances[i] -= amount
            } else {
                return -1
            }
        }
    }
}

// const clientsBalances = withdraw(nameClients, clientBalance, nameClients, clientBalance);

// console.log(clientsBalances);
