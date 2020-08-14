const wallet = {
    transactions: [1, 2, 56, 31, 65],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    }
};
console.log(wallet.getMax());
console.log(wallet.getMin());