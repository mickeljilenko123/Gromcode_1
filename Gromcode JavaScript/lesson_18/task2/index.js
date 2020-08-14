const wallet = {
    transactions: [1,33, 55, 809, 12],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};

// console.log(wallet.getMax());
// console.log(wallet.getMin());

export { wallet };