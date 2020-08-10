export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0)
        return null
    let absoluteValue = arr
        .map(num => Math.abs(num * num))
    return Math.min(...absoluteValue)
};