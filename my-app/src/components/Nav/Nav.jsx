import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }
  return (
    <div className="nav">
      <button
        onClick={() => {
          handleClick("/signup");
        }}
        className="nav__signUp"
      >
        Регистрация
      </button>

      <button
        onClick={() => {
          handleClick("/signin");
        }}
        className="nav__signIn"
      >
        Войти
      </button>
    </div>
  );
}

export default Nav;
