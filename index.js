 export function createArrayOfFunctions(n) {
     let arr = [];
     if (typeof(n) !== 'numbers') return null;
     if (n === undefined) return arr;
     for (let i = 0; i < n; i++) {
         arr[i] = function() {
             return i;
         }
     }
     return arr;
 }