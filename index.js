//1. querySelector elements
//2. считать данные формы
//3. отправка через POST и обработать ответ (handle response)
//4. валидация инпута
//
"use strict";

const serverUrl = "https://5f60907d90cf8d0016557f3a.mockapi.io/api/v1/users";

const loginForm = document.querySelector(".login-form");
const submit = document.querySelector(".submit-button");
const error = document.querySelector(".error-text");


// let userBody = {
//   email: "apple@example.com",
//   name: "Apple",
// };

// console.log(res);

const form = () => {
    if (loginForm.reportValidity()) {
        submit.disabled = false;
    }
};
loginForm.addEventListener("input", form);

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
            error.textContent = "Failed to create user";
        });
};

loginForm.addEventListener("submit", sendData);