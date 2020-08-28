//algo
//1. read form data after submit +++
//2. validate email
//3. validate password

const emailInput = document.querySelector('#email');
const emailErrorText = document.querySelector('.error-text_email');
const passwordInput = document.querySelector('#password');
const passwordErrorText = document.querySelector('.error-text_password');

const handleEmail = (event) => {
    let email = event.target.value;
    const error = email ? validateEmail(email) : 'Email required';
    emailErrorText.textContent = error;
}

// draft solution
// const handleEmail = (event) => {
//     let error = event.target.value ?  null : 'Email required';
//     if(!error) {
//         error = event.target.value.includes('0') ? null 
//         : 'Incorrect email';
//     }
//     emailErrorText.textContent = error;
// }

emailInput.addEventListener('input', handleEmail);
const handlePassword = (event) => {
    const error = event.target.value ? null : 'Password required';
    passwordErrorText.textContent = error;

}

passwordInput.addEventListener('input', handlePassword);

const handleSubmit = (event) => {
    event.preventDefault();
    const formData =
        JSON.stringify(Object.fromEnties(new FormData(formElem)));
    alert(formData);
}
formElem.addEventListener('submit', handleSubmit);