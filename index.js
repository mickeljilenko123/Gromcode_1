const cleanTransactionsList = sum => {
    let resA = sum.filter(elem => {
        console.log(Number(elem));
        if (Number(elem)) {
            return elem;
        }
    });

    return resA.map(elem => "$" + (+elem).toFixed(2));
    // console.log(w)
};

console.log(cleanTransactionsList(["1.9", "16.4", 17, "6 dollars "]));