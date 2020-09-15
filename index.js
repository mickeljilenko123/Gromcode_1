//1. querySelector elements
//2. считать данные формы
//3. отправка через POST и обработать ответ (handle response)
//4. валидация инпута
//
"use strict";

const serverUrl = "https://5f577f7f1a07d600167e6e96.mockapi.io/users";

const loginForm = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");
const errorField = document.querySelector(".error-text");


// let userBody = {
//   email: "apple@example.com",
//   name: "Apple",
// };

// console.log(res);

const formChanges = () => {
    if (loginForm.reportValidity()) {
        submitButton.disabled = false;
    }
};
loginForm.addEventListener("input", formChanges);

const sendData = (event) => {
    event.preventDefault();
    const userBody = Object.fromEntries([...new FormData(loginForm)]);

    fetch(serverUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charser= utf-8",
            },
            body: JSON.stringify(userBody),
        })
        .then((response) => response.json())
        .then((data) => {
            loginForm.reset();
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorField.textContent = "Failed to create user";
        });
};

loginForm.addEventListener("submit", sendData);