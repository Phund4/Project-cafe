import '../sass/login/main.sass'
import LoginBear from '../img/login-bear.svg'
import Field from '../components/Field/Field'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { HashLink as Link } from "react-router-hash-link";

function Login() {
    // eslint-disable-next-line no-unused-vars
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

    function createUser() {
        let email = document.getElementById('login-field-email').value;
        let password = document.getElementById('login-field-password').value;
        let name='FFF';
        let telephone = '6574937463';
        let birthday = '12.01.04';
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, telephone, email, birthday, password }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                console.log(data);
                getUser();
            });
    }

    return (
        <>
            <div className="login-main">
                <header className="login-header">
                    <img className='login-header__img' src={LoginBear} />
                    <h1 className='login-header__h1'>ВХОД</h1>
                </header>
                <div className='login-content'>
                    <Field text='Почта' id='login-field-email'/>
                    <Field text='Пароль' id='login-field-password'/>
                    <Link to='/authorization' className='login-content__registration'>
                        Регистрация
                    </Link>
                </div>
                <button className='login-button' onClick={createUser}>
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
