const getTitleElement = title => {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}
getTitleElement();

const getInputElement = input => {
    const inputElem = document.querySelector('input', 'text');
    console.dir(inputElem);
    return inputElem;
}
getInputElement();