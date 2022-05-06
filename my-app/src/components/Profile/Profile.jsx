import React from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/userContext";
import useFormValidaion from "../../hooks/Validation";
import MainApiObj from "../../utils/MainApi";
import "./Profile.css";

function Profile({ setCurrentUser }) {
  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();
  const user = React.useContext(CurrentUserContext);
  console.log(isValid);
  const navigate = useNavigate();

  function handleUpdate(event) {
    event.preventDefault();

    if (values.name !== user.name || values.email !== user.email) {
      MainApiObj.updateUser(values)
        .then((data) => {
          setCurrentUser(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleExit() {
    localStorage.removeItem("token");
    navigate("/signin");
  }

  React.useEffect(() => {
    setValues({ ...user });
  }, []);

  return (
    <section className="profile">
      <form className="profile__form" name="Profile" onSubmit={handleUpdate}>
        <h2 className="profile__title">Привет {user.name}!</h2>
        <label className="profile__container">
          <span className="profile__input-name">Имя</span>
          <input
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
          <input required type="email" name="email" className="profile__input" onChange={handleChange} defaultValue={user.email}></input>
          <span className="profile__err">{`${errors.email || ""}`}</span>
        </label>
        <button disabled={!isValid} type="submit" className="profile__submit">
          Редактировать
        </button>
        <button type="button" className="profile__acc-exit" onClick={handleExit}>
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
