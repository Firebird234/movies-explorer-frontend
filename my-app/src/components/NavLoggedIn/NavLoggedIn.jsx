import React from "react";
import './NavLoggedIn.css'
import acc from '../../images/acc.png';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


function NavLoggedIn({menuHandler, menuOpened}) {

    // let redirect = useNavigate()

    // function redirectHandler(route) {
    //     redirect("/movies")
    // }


    return (
        <div className="navLoggedIn">
                <div className={`navLoggedIn__burger-btn ${!menuOpened&&'navLoggedIn__burger-btn_disabled'}`} onMouseDown = {menuHandler}>
                    <span></span>
                </div>
                <div className="navLoggedIn__films-nav">
                    <NavLink className="navLoggedIn__navButton" to={"/movies"}><p>Фильмы</p></NavLink>
                    <NavLink className="navLoggedIn__navButton" to={"/saved-movies"} ><p>Сохранённые фильмы</p></NavLink>
                </div>

                <div className="navLoggedIn__account-nav">
                    <NavLink className="navLoggedIn__navButton" to={"/profile"}><p>Аккаунт</p></NavLink>
                    <button className="navLoggedIn__navButton"><img src={acc} alt="" className="navLoggedIn__acc" /></button>
                </div>
        </div>
    )
}

export default NavLoggedIn;