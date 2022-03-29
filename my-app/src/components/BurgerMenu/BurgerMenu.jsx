import React from "react";
import acc from '../../images/acc.svg';
import './BurgerMenu.css'

import { NavLink } from "react-router-dom";

function BurgerMenu ({menuHandler,menuOpened}) {
    return (
        <nav className={`burger ${menuOpened && 'burger_disabled'}`}>
            <div className="burger__close" onClick={menuHandler}></div>
                <button className="burger__navButton">Главная</button>
                <button className="burger__navButton">Фильмы</button>
                <button className="burger__navButton">Сохранённые фильмы</button>
                <button className="burger__navButton">Аккаунт <img src={acc} alt="" className="burger__acc" /></button>
        </nav>
    )
}

export default BurgerMenu;