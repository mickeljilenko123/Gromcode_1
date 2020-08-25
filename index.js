"use strict";
const inputElem = document.querySelector(".text-input");
console.log(inputElem);

inputElem.addEventListener("change", () => {
    console.log(inputElem.value);
});