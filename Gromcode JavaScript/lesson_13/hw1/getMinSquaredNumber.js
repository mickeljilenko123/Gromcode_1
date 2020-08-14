export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr)) return null;
    let a = arr.map(elem => elem * elem)
    return Math.abs(Math.min(...a));
};