const finishForm = () => {
    const formCreate = document.createElement('form');
    formCreate.classList.add('login-form');
    const inputCreate = document.createElement('input');
    formCreate.append(inputCreate);
    inputCreate.setAttribute('text', 'password');
    inputCreate.setAttribute('name', 'password');
    return formCreate;
}
finishForm();