import React from "react";
import './RedForm.css'
import logo from '../../images/logo.svg'

function RedForm({name, email, password}) {
    return(
        <form className="regForm">
            <img src={logo} alt="Logo" className="regForm__logo" />
            <h2 className="regForm__title">Добро пожаловать!</h2>

            <label className="regForm__container">
                <span className="regForm__input-name">Имя</span>
                <input defaultValue={name} type="text" className="regForm__input" name="Name" />
                <span id="Name__err"></span>
            </label>

            <label className="regForm__container">
                <span className="regForm__input-name">E-mail</span>
                <input defaultValue={email} type="email" className="regForm__input" name="Email" />
                <span id = "Email__err"></span>
            </label>

            <label className="regForm__container">
                <span className="regForm__input-name">Пароль</span>
                <input defaultValue={password} type="password" className="regForm__input" name="Password" />
                <span id="Password__err">Что-то пошло не так...</span>
            </label>

            <button className="regForm__submit">Зарегистрироваться</button>
            <div className="regForm__signIn-container">
                <span className="regForm__signIn-signature">Уже зарегистрированы?</span>
                <button type="button" className="regForm__signIn">Войти</button>
            </div>
        </form>
    )
}

export default RedForm;