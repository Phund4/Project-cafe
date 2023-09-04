/* eslint-disable no-unused-vars */
import "../sass/authorization/main.sass";
import LoginBear from "../img/login-bear.svg";
import Field from "../components/Field/Field";
import React from "react";
import { useState, useEffect } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import CryptoJS from 'crypto-js';

function Authorization() {
    const UnvalidateInput = (input, p, text) => {
        input.classList.remove('field-yellow');
        input.classList.add('field-red');
        p.innerText = text;
        p.style.color = 'red';
    }

    const ValidateInput = (input, p, text) => {
        input.classList.remove('field-red');
        input.classList.add('field-yellow');
        p.innerText = text;
        p.style.color = 'black';
    }

    const ValidateName = (name) => {
        return (name.length >= 6 ? true : false);
    }

    const ValidateTelephone = (telephone) => {
        // eslint-disable-next-line no-useless-escape
        return telephone.match(/^[\d\+][\d\(\)\ -]{4,14}\d$/);
    }

    const ValidateEmail = (email) => {
        // eslint-disable-next-line no-useless-escape
        if(email.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i))
            return true;
        return false;
    };

    const ValidateBirthday = (birthday) => {
        return (birthday.length == 10 ? true : false);
    }

    const ValidatePassword = (password) => {
        return (password.length >= 6 ? true : false);
    }

    const CheckName = () => {
        let nameInput = document.getElementById('authorization-field-name');
        let nameText = document.getElementById('authorization-p-name');
        let name = nameInput.value;
        if (!ValidateName(name)) {
            UnvalidateInput(nameInput, nameText, 'Имя не менее 6 символов');
            return false;
        } else {
            ValidateInput(nameInput, nameText, 'Ваше имя');
            return true;
        }
    }

    const CheckTelephone = () => {
        let telephoneInput = document.getElementById('authorization-field-phone');
        let telephoneText = document.getElementById('authorization-p-phone');
        let telephone = telephoneInput.value;
        if (!ValidateTelephone(telephone)) {
            UnvalidateInput(telephoneInput, telephoneText, 'Неправильный номер');
            return false;
        } else {
            ValidateInput(telephoneInput, telephoneText, 'Ваш телефон для связи');
            return true;
        }
    }

    const CheckEmail = () => {
        let emailInput = document.getElementById('authorization-field-email');
        let emailText = document.getElementById('authorization-p-email');
        let email = emailInput.value;
        if (!ValidateEmail(email)) {
            UnvalidateInput(emailInput, emailText, 'Неправильная почта');
            return false;
        } else {
            ValidateInput(emailInput, emailText, 'Ваша электронная почта');
            return true;
        }
    }

    const CheckBirthday = () => {
        let birthdayInput = document.getElementById('authorization-field-birthday');
        let birthdayText = document.getElementById('authorization-p-birthday');
        let birthday = birthdayInput.value;
        if (!ValidateBirthday(birthday)) {
            UnvalidateInput(birthdayInput, birthdayText, 'Неправильная дата рождения');
            return false;
        } else {
            ValidateInput(birthdayInput, birthdayText, 'Дата рождения');
            return true;
        }
    }

    const CheckPassword = () => {
        let passwordInput = document.getElementById('authorization-field-password');
        let passwordText = document.getElementById('authorization-p-password');
        let password = passwordInput.value;
        if (!ValidatePassword(password)) {
            UnvalidateInput(passwordInput, passwordText, 'Пароль не менее 6 символов');
            return false;
        } else {
            ValidateInput(passwordInput, passwordText, 'Введите пароль');
            return true;
        }
    }

    function createUser(event) {
        if(!CheckName() || !CheckTelephone() || !CheckEmail() || !CheckBirthday() || !CheckPassword()) {
            return;
        }
        let username = document.getElementById('authorization-field-name').value;
        let telephone = document.getElementById('authorization-field-phone').value;
        let email = document.getElementById('authorization-field-email').value;
        let birthday = document.getElementById('authorization-field-birthday').value;
        let password = document.getElementById('authorization-field-password').value;

        let xhr = new XMLHttpRequest();
        let url = "http://127.0.0.1:8000/auth/jwt/register";

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.status === 201) {
            window.location.href = '/login';
        } else { 
            event.preventDefault();
            event.stopPropagation();
            console.log('Error');
        }
        }

        var data = JSON.stringify({ "username": username, "email": email, "password": password, "role_id": 0});

        xhr.send(data);


        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, telephone, email, birthday, password }),
        // })
        //     .then(response => {
        //         window.location.href = '/login';
        //         return response.text();
        //     })
    }

    return (
        <>
            <div className="authorization-main">
                <header className="authorization-header">
                    <img className="authorization-header__img" src={LoginBear} />
                    <h1 className="authorization-header__h1">АВТОРИЗАЦИЯ</h1>
                </header>
                <div className="authorization-content">
                    <Field
                        type="text"
                        idInput="authorization-field-name"
                        idText="authorization-p-name"
                        text="Ваше имя"
                        placeholder="ИМЯ"
                    />
                    <Field
                        type="tel"
                        idInput="authorization-field-phone"
                        idText="authorization-p-phone"
                        text="Ваш телефон для связи"
                        placeholder="+7"
                    />
                    <Field
                        type="email"
                        idInput="authorization-field-email"
                        idText="authorization-p-email"
                        text="Ваша электронная почта"
                    />
                    <Field
                        type="date"
                        idInput="authorization-field-birthday"
                        idText="authorization-p-birthday"
                        text="Дата рождения"
                    />
                    <Field 
                        type="password" 
                        idInput="authorization-field-password"
                        idText="authorization-p-password"
                        text="Введите пароль"/>
                </div>
                <button className="authorization-button" onClick={createUser}>
                    <p className="authorization-button__link">
                        Зарегистрироваться
                    </p>
                </button>
            </div>
        </>
    );
}

export default Authorization;
