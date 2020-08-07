const splitText = (text, len) => {
    const srtArr = [];
    let startPosition = 0;
    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }

        srtArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;

    }

    return srtArr.join('\n');
};
console.log(splitText('wetwtwew', 4));