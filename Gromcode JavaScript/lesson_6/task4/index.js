const mainArray = ['Ann', 'Nick', 'Lee', 'Mike'];

function swap(arr) {
    const [start, ...rest] = arr;

    return [...rest, start];
}

const getMainArr = swap(mainArray);

console.log(getMainArr);