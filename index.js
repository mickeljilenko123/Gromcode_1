const elem = document.querySelector('.task-status');
elem.addEventListener('change', () => {
    console.log(elem.checked);
});