import React from "react";
import acc from "../../images/acc.svg";
import "./BurgerMenu.css";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BurgerMenu({ menuHandler, menuOpened }) {
  const navigate = useNavigate();

  function handleClick(endPoint) {
    navigate(endPoint);
  }

  return (
    <nav className={`burger ${menuOpened && "burger_disabled"}`}>
      <div className="burger__close" onClick={menuHandler}></div>
      <button
        onClick={() => {
          handleClick("/main");
        }}
        className="burger__navButton"
      >
        Главная
      </button>
      <button
        onClick={() => {
          handleClick("/movies");
        }}
        className="burger__navButton"
      >
        Фильмы
      </button>
      <button
        onClick={() => {
          handleClick("/saved-movies");
        }}
        className="burger__navButton"
      >
        Сохранённые фильмы
      </button>
      <button
        onClick={() => {
          handleClick("/profile");
        }}
        className="burger__navButton"
      >
        Аккаунт <img src={acc} alt="" className="burger__acc" />
      </button>
    </nav>
  );
}

export default BurgerMenu;
