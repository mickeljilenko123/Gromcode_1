export const setButton = (buttonText) => {
    const setBut = document.querySelector('body');
    setBut.innerHTML = `<button>${buttonText}</button>`;
    console.log(setBut);
    return setBut;
}
const buttonText = 'Как дела?';
setButton(buttonText);