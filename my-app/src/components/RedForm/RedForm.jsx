import React from "react";
import "./RedForm.css";
import logo from "../../images/logo.svg";
import useFormValidaion from "../../hooks/Validation";
import { useNavigate, Link } from "react-router-dom";

function RedForm({ name, email, password, loggedIn, handleRegister }) {
  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values, "/movies");
  }

  function handleLogin() {
    navigate("/movies");
  }

  React.useEffect(() => {
    setValues({});
  }, []);

  return (
    <form className="regForm" onSubmit={handleSubmit}>
      <Link className="regForm__link" to={"/main"}>
        <img src={logo} alt="Logo" className="regForm__logo" />
      </Link>
      <h2 className="regForm__title">Добро пожаловать!</h2>

      <label className="regForm__container">
        <span className="regForm__input-name">Имя</span>
        <input placeholder={name} minLength={2} maxLength={30} required onChange={handleChange} type="text" className="regForm__input" name="Name" />
        <span className="regForm__err" id="Name__err">
          {errors.Name || ""}
        </span>
      </label>

      <label className="regForm__container">
        <span className="regForm__input-name">E-mail</span>
        <input required onChange={handleChange} placeholder={email} type="email" className="regForm__input" name="Email" />
        <span className="regForm__err" id="Email__err">
          {errors.Email || ""}
        </span>
      </label>

      <label className="regForm__container">
        <span className="regForm__input-name">Пароль</span>
        <input
          minLength={6}
          maxLength={20}
          required
          onChange={handleChange}
          placeholder={password}
          type="password"
          className="regForm__input"
          name="Password"
        />
        <span className="regForm__err" id="Password__err">
          {errors.Password || ""}
        </span>
      </label>

      <button className="regForm__submit" disabled={!isValid}>
        Зарегистрироваться
      </button>
      <div className="regForm__signIn-container">
        <span className="regForm__signIn-signature">Уже зарегистрированы?</span>
        <button onClick={handleLogin} type="button" className="regForm__signIn">
          Войти
        </button>
      </div>
    </form>
  );
}

export default RedForm;
