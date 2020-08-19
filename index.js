 export const createButton = (buttonText) => {
     const b = document.querySelector('body');
     const buttonCreate = document.createElement('button');
     b.append(buttonCreate);
     buttonCreate.textContent = buttonText;
     return buttonCreate;
 };

 createButton('Submit');