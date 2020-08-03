const mergeObjectsV1 = (obj1, obj2) => {
    let newObj = {};
    const objV1 = Object.assign(newObj, obj1, obj2);
    return objV1;
}
const mergeObjectsV2 = (obj1, obj2) => {
    let newObj = {};
    const objV2 = Object.assign(newObj, obj2, obj1);
    return objV2;
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