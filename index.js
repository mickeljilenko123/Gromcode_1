//algo
//1. Перебрать числа от 1 до n
//2. Проветь если простое число

'use strict'


function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



function getPrimes(n) {
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }

}
getPrimes(10)