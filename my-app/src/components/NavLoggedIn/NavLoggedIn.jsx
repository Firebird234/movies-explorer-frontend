import React from "react";
import './NavLoggedIn.css'
import acc from '../../images/acc.svg';
import acc_white from '../../images/acc_white.svg';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


function NavLoggedIn({menuWhite, menuHandler, menuOpened}) {

    // let redirect = useNavigate()

    // function redirectHandler(route) {
    //     redirect("/movies")
    // }


    return (
        <div className="navLoggedIn">
                <div className={`navLoggedIn__burger-btn ${!menuOpened &&'navLoggedIn__burger-btn_disabled'} ${!menuWhite && 'navLoggedIn__burger-btn_white'}`} onMouseDown = {menuHandler}>
                    <span></span>
                </div>
                <div className="navLoggedIn__films-nav">
                    <NavLink className={`navLoggedIn__navButton ${!menuWhite && 'navLoggedIn__navButton_white'}`} to={"/movies"}><p>Фильмы</p></NavLink>
                    <NavLink className={`navLoggedIn__navButton ${!menuWhite && 'navLoggedIn__navButton_white'}`} to={"/saved-movies"} ><p>Сохранённые фильмы</p></NavLink>
                </div>

                <div className="navLoggedIn__account-nav">
                    <NavLink className={`navLoggedIn__navButton ${!menuWhite && 'navLoggedIn__navButton_white'}`} to={"/profile"}><p>Аккаунт</p></NavLink>
                    <button className={`navLoggedIn__navButton ${!menuWhite && 'navLoggedIn__navButton_white'}`}><img src={menuWhite ? acc : acc_white} alt="" className="navLoggedIn__acc" /></button>
                </div>
        </div>
    )
}

export default NavLoggedIn;