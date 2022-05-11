import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/userContext";
import useFormValidaion from "../../hooks/Validation";
import MainApiObj from "../../utils/MainApi";
import { Popup } from "../Popup/Popup";
import "./Profile.css";

function Profile({ setCurrentUser, handleTokenCheck, setLoggedIn, setSavedMovies }) {
  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();
  const user = React.useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [popupMess, setPopupMess] = useState("");

  function handleUpdate(event) {
    event.preventDefault();

    if (values.name !== user.name || values.email !== user.email) {
      MainApiObj.updateUser(values)
        .then((data) => {
          setPopup(true);
          setPopupMess("Данные успешно изменены");
          setCurrentUser(data);
        })
        .catch((err) => {
          setPopup(true);
          setPopupMess("Что-то не получилось, соре =(");
          console.log(err);
        });
    }
  }

  function handleExit() {
    localStorage.removeItem("film-inp");
    localStorage.removeItem("savedFilm-inp");
    localStorage.removeItem("savedFilm-mov");
    localStorage.removeItem("savedFilm-check");
    localStorage.removeItem("film-mov");
    localStorage.removeItem("film-check");

    setCurrentUser({});
    setLoggedIn(false);
    setSavedMovies([]);
    navigate("/signin");
  }

  React.useEffect(() => {
    handleTokenCheck(false);
  }, []);

  React.useEffect(() => {
    setValues(user);
  }, [user]);

  // React.useEffect(() => {
  //   console.log("mount", user);
  //   setValues(user);
  // }, []);

  return (
    <section className="profile">
      <form className="profile__form" name="Profile" onSubmit={handleUpdate}>
        <h2 className="profile__title">Привет {user.name}!</h2>
        <label className="profile__container">
          <span className="profile__input-name">Имя</span>
          <input
            value={values[`name`]}
            minLength={2}
            maxLength={30}
            required
            type="text"
            name="name"
            className="profile__input"
            onChange={handleChange}
            defaultValue={user.name}
          ></input>
          <span className="profile__err">{`${errors.name || ""}`}</span>
        </label>
        <label className="profile__container">
          <span className="profile__input-name">email</span>
          <input
            value={values[`email`]}
            required
            type="email"
            name="email"
            className="profile__input"
            onChange={handleChange}
            defaultValue={user.email}
          ></input>
          <span className="profile__err">{`${errors.email || ""}`}</span>
        </label>
        <button disabled={!isValid} type="submit" className="profile__submit">
          Редактировать
        </button>
        <button type="button" className="profile__acc-exit" onClick={handleExit}>
          Выйти из аккаунта
        </button>
      </form>
      <Popup popup={popup} message={popupMess} setPopup={setPopup} />
    </section>
  );
}

export default Profile;
