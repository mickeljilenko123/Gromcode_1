const reverseString = str => {
    // if (str !== String)  return null;
    if (typeof(str) !== 'string') return null;
    return str.split('').reverse().join('');
}

console.log(reverseString('tpircSavaJ'));