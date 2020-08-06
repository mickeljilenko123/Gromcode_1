const getRandomNumbers = (len, start, end) => {
    if (Math.floor(start) >= Math.floor(end))
        return null;
    return len.map(len => Math.floor(Math.random() * (start - end + 1) + end));
}

console.log(getRandomNumbers(10, 1, 7));