const cleanTransactionsList = sum => {
    let res = sum.filter(elem => {
        console.log(Number(elem));
        if (Number(elem)) {
            return elem;
        }
    });

    return res.map(elem => "$" + (+elem).toFixed(2));
    // console.log(w)
};

console.log(cleanTransactionsList(["1.9", "12.5", "9", "0.2 ", "6 dollars "]));
