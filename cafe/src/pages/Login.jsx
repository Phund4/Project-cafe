import '../sass/login/main.sass'
import LoginBear from '../img/login-bear.svg'
import Field from '../components/Field/Field'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { HashLink as Link } from "react-router-hash-link";

function Login() {
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

    const ValidateLogin = (email, password) => {
        let list = JSON.parse(users);
        for(let i=0; i<list.length; i++) {
            if(list[i].mail == email && 
                list[i].password == password) {
                return true;
            }
        }
        return false;
    };

    function LoginUser() {
        let email = document.getElementById('login-field-email').value;
        let password = document.getElementById('login-field-password').value;

        if(ValidateLogin(email, password)) {
            window.location.href = `/profile?id=${email.split('@')[0]}`;
        } else {
            window.location.href = '/login/error';
        }
    }

    return (
        <>
            <div className="login-main">
                <header className="login-header">
                    <img className='login-header__img' src={LoginBear} />
                    <h1 className='login-header__h1'>ВХОД</h1>
                </header>
                <div className='login-content'>
                    <Field text='Почта' idInput='login-field-email' idText='login-p-email'/>
                    <Field text='Пароль' idInput='login-field-password' idText='login-p-password'/>
                    <Link to='/authorization' className='login-content__registration'>
                        Регистрация
                    </Link>
                </div>
                <button className='login-button' onClick={LoginUser}>
                    {/* <Link to='/login/error' className="login-button__link">
                    ВОЙТИ
                </Link> */}
                    ВОЙТИ
                </button>

            </div>
        </>
    );
}

export default Login;
