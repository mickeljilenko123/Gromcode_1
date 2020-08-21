const inputValue = document.querySelector('.search__input');

document.querySelector('.search__btn')
    .addEventListener('click', () => {
        console.log(inputValue.value)
    })