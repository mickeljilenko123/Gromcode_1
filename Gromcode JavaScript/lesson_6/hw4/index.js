const mainArray = [9, 3, 66, 9, 2, 3, 9, 66, 7];

function uniqueCount(array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        // console.log('array[i]', array[i]);
        let isIncludes = false;
        for (let j = 0; j < i; j++) {
            // console.log(j)
            if (array[j] === array[i]) {
                // console.log('array[j]', array[j]);
                isIncludes = true;
            }
        }
        if (!isIncludes) {
            num++;
        }
    }
    return num;
}

const uniqueRes = uniqueCount(mainArray);

console.log(uniqueRes);