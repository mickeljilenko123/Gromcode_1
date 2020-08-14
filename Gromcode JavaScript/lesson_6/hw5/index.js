const mainArray = [1, 2, 3, 4, 5, 5, 4, 3, 1, 5];

function removeDuplicates(array) {
    let a = [];
    
    for (let i = 0; i < array.length; i++) {
        a.push(array[i])
        // console.log(array[i], i);
        for (let k = i + 1; k < array.length; k++) {
            // console.log(i + 1);
            if (array[i] === array[k]) {
                // console.log(array[i][i]);
                a.pop(array[k]);
            }
        }  
    }
    return a;
}

const removeArr = removeDuplicates(mainArray);

console.log(removeArr);