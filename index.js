function hendleClick(event) {
    const getText = event.target;
    console.log(getText.dataset.pageNumber);
};

const setText = document.querySelectorAll('.pagination__page');

setText.forEach(function(btn) {
    btn.addEventListener('click', hendleClick);
})