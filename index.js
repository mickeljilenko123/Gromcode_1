const check = document.querySelector(".task-status");

check.addEventListener("change", () => {
    check.checked ? console.log(true) : console.log(false);
    // check.checked ? console.log(check.value) : console.log(check.value);
});