const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0)
        return null
    let absoluteValue = arr
        .map(num => Math.abs(num * num))
    return Math.min(...absoluteValue)
};

const resultArr = [-777, 3, -1, 45, -20, -2020];

console.log(getMaxAbsoluteNumber(resultArr));