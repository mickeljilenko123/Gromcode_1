const superRound = num => {
    return [Math.round(num), Math.floor(num), Math.ceil(num), Math.trunc(num), +num.toFixed(num)];
}
console.log(superRound(17.2));