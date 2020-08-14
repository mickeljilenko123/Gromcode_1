const mainArray = [1, 2, 8, 4, 22, 90];

function sortAsc(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let max = i;

        for (let k = i + 1; k < array.length; k++) {
            if (array[k] < array[max]) {
                max = k;
            }
        }
        let out = array[max];
            array[max] = array[i];
            array[i] = out;
    }
    return array;
}

function sortDesc(array) {
    // let a = array.length;

    for (let i = 0; i < array.length - 1; i++) {

        for (let k = 0; k < array.length - 1 - i; k++) {
            if (array[k + 1] > array[k]) {
                let out = array[k + 1];
                array[k + 1] = array[k];
                array[k] = out;
            }
        }
    }
    return array;
}

// const sortArr = sortAsc(mainArray);
// const sortArr2 = sortDesc(mainArray);

// console.log(sortArr);
// console.log(sortArr2);