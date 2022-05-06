import React from "react";
import "./LogIn.css";
import logo from "../../images/logo.svg";
import useFormValidaion from "../../hooks/Validation";
import { useNavigate } from "react-router-dom";

function LogIn({ handleLogin, loggedIn }) {
  const navigate = useNavigate();

  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
    console.log(values);
  }

  function handleRegister() {
    navigate("/signup");
  }

  React.useEffect(() => {
    setValues({});
  }, []);

  return (
    <form className="logIn" onSubmit={handleSubmit}>
      <img src={logo} alt="Logo" className="logIn__logo" />
      <h2 className="logIn__title">Рады видеть!</h2>

      <label className="logIn__container">
        <span className="logIn__input-name">E-mail</span>
        <input required type="email" onChange={handleChange} className="logIn__input" name="Email" />
        <span className="logIn__err" id="logIn__mail-err">
          {errors.Email || ""}
        </span>
      </label>

      <label className="logIn__container">
        <span className="logIn__input-name">Пароль</span>
        <input minLength={6} maxLength={20} required type="password" onChange={handleChange} className="logIn__input" name="Password" />
        <span className="logIn__err" id="logIn__pass-err">
          {errors.Password || ""}
        </span>
      </label>

      <button disabled={!isValid} className="logIn__submit">
        Войти
      </button>
      <div className="logIn__signIn-container">
        <span className="logIn__signIn-signature">Еще не зарегистрированы?</span>
        <button onClick={handleRegister} type="button" className="logIn__signIn">
          Регистрация
        </button>
      </div>
    </form>
  );
}

export default LogIn;
