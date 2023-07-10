/* eslint-disable no-unused-vars */
import "../sass/profile/main.sass";
import ProfileHuman from "../img/profile-human.svg";
import LoginBear from "../img/login-bear.svg";
import React from "react";
import BurgerMini from "../img/Burger-mini.svg";
import { useState, useEffect } from 'react';
import { HashLink as Link } from "react-router-hash-link";

function Profile() {
    const [users, setUsers] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        fetch('http://localhost:3000')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
            });
    }

    function thisUser() {
        let list = JSON.parse(users);
        let res = {};
        let id = document.location.href.split('?')[1].split('=')[1];
        for (let i=0; i<list.length; i++) {
            if(list[i].mail.split('@')[0] == id) {
                res.name = list[i].name;
                res.telephone = list[i].telephone;
                res.email = list[i].mail;
                res.birthday = list[i].birthday.slice(0, 10);
                res.password = list[i].password;
            }
        }
        return res;
    }

    return (
        <>
            <div className="profile-main">
                <div className="profile-sidebar">
                    <Link to="/menu/" className="profile-sidebar__hamburger" />
                </div>
                <header className="profile-header">
                    <h1 className="profile-header__h1-blur">Подкрепление</h1>
                    <img className="profile-header__img-beer" src={LoginBear} />
                    <div className="profile-header__h2">
                        <img className="profile-header__img-human" src={ProfileHuman}></img>
                        <h2 className="profile-header__p">ПРОФИЛЬ</h2>
                    </div>
                </header>
                <div className="profile-content">
                    <div className="profile-content__field">
                        <p className="profile-content__field__p">ИМЯ</p>
                        <input
                            type="text"
                            id="profile-field-name"
                            placeholder="ИМЯ"
                            value={thisUser().name}
                            className="profile-content__field__input field-yellow"
                            readOnly={true}
                        />
                    </div>
                    <div className="profile-content__field">
                        <p className="profile-content__field__p">Ваш телефон для связи</p>
                        <input
                            type="tel"
                            id="profile-field-phone"
                            placeholder="+7"
                            value={thisUser().telephone}
                            className="profile-content__field__input field-yellow"
                            readOnly={true}
                        />
                    </div>
                    <div className="profile-content__field">
                        <p className="profile-content__field__p">Электронная почта</p>
                        <input
                            type="email"
                            id="profile-field-email"
                            value={thisUser().email}
                            className="profile-content__field__input field-yellow"
                            readOnly={true}
                        />
                    </div>
                    <div className="profile-content__field">
                        <p className="profile-content__field__p">Дата рождения</p>
                        <input
                            type="text"
                            id="profile-field-birthday"
                            value={thisUser().birthday}
                            className="profile-content__field__input field-yellow"
                            readOnly={true}
                        />
                    </div>
                    <div className="profile-content__field">
                        <p className="profile-content__field__p">Пароль</p>
                        <input
                            type="text"
                            id="profile-field-password"
                            value={thisUser().password}
                            className="profile-content__field__input field-yellow"
                            readOnly={true}
                        />
                    </div>
                </div>
                <div className="profile-berger">
                    <img className="profile-berger__img" src={BurgerMini} />
                </div>
            </div>
        </>
    );
}

export default Profile;
