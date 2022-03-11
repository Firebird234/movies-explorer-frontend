import React from "react";
import './LogIn.css';
import logo from '../../images/logo.svg'

function LogIn(props) {
    return (
        <form className="logIn">
        <img src={logo} alt="Logo" className="logIn__logo" />
        <h2 className="logIn__title">Рады видеть!</h2>

        <label className="logIn__container">
            <span className="logIn__input-name">E-mail</span>
            <input type="email" className="logIn__input" name="Email" />
            <span id = "logIn__mail-err"></span>
        </label>

        <label className="logIn__container">
            <span className="logIn__input-name">Пароль</span>
            <input type="password" className="logIn__input" name="Password" />
            <span id="logIn__pass-err"></span>
        </label>

        <button className="logIn__submit">Войти</button>
        <div className="logIn__signIn-container">
            <span className="logIn__signIn-signature">Еще не зарегистрированы?</span>
            <button type="button" className="logIn__signIn">Регистрация</button>
        </div>
    </form>
    )
}

export default LogIn;