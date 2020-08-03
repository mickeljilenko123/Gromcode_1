const mergeObjectsV1 = (obj1, obj2) => {
    let newObj = {};
    return Object.assign(newObj, obj1, obj2)
}
const mergeObjectsV2 = (obj1, obj2) => {
    let newObj = {};
    return Object.assign(newObj, obj2, obj1)
}
const mergeObjectsV3 = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    }
}
const mergeObjectsV4 = (obj1, obj2) => {
    return {
        ...obj2,
        ...obj1
    }
}