const checkBox = document.querySelector('.task-status');

checkBox.addEventListener('change', () => {
    checkBox.checked ? console.log(true) : console.log(false)
});

// const a = () => {
//     if (checkBox.checked) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// } 

// checkBox.addEventListener('change', a);
