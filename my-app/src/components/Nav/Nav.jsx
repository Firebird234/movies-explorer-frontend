import React from "react";
import './Nav.css'

function Nav(props) {
  return (
    <div className="nav">
        <button className="nav__signUp">Регистрация</button>
        <button className="nav__signIn">Войти</button>
    </div>
  );
}

export default Nav;