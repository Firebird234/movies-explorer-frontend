import React from "react";
import './Profile.css'

function Profile({name, email}) {
    return (
        <section className="profile">
            <form className="profile__form" name="Profile">
                <h2 className="profile__title">Привет {name}!</h2>
                <label className="profile__container">
                    <span className="profile__input-name" >Имя</span>
                    <input className="profile__input" defaultValue={name}></input>
                </label>
                <label className="profile__container">
                    <span className="profile__input-name" >email</span>
                    <input className="profile__input" defaultValue={email}></input>
                </label>
                <button type="submit" className="profile__submit">Редактировать</button>
                <button type="button" className="profile__acc-exit">Выйти из аккаунта</button>
            </form>
        </section>
    )
}

export default Profile;