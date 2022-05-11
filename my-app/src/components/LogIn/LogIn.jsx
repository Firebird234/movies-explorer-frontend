import React, { useContext } from "react";
import "./LogIn.css";
import logo from "../../images/logo.svg";
import useFormValidaion from "../../hooks/Validation";
// import { CurrentUserContext } from "../../contexts/userContext";
import { useNavigate, Link } from "react-router-dom";

function LogIn({ handleLogin, loggedIn }) {
  const navigate = useNavigate();
  // const user = React.useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values, "/movies");
  }

  function handleRegister() {
    navigate("/signup");
  }

  React.useEffect(() => {
    setValues({});
  }, []);

  return (
    <form className="logIn" onSubmit={handleSubmit}>
      <Link className="logIn__link" to={"/main"}>
        <img src={logo} alt="Logo" className="logIn__logo" />
      </Link>
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
