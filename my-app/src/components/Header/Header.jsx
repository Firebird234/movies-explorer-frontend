import React from "react";
import logo from "../../images/logo.svg";
import Nav from "../Nav/Nav";
import NavLoggedIn from "../NavLoggedIn/NavLoggedIn";
import { useNavigate } from "react-router-dom";


import './Header.css'

function Header({loggedIn, menuHandler, menuOpened}) {

  let redirect = useNavigate();

  function handleLogogClick() {
    redirect("/");
  }
  
  return (
    <header className={`header__container ${loggedIn && 'header__container_white'}`}>
      <img alt="logo" className="header_logo" src={logo} onClick = {handleLogogClick}/>
      {loggedIn ? <NavLoggedIn menuOpened={menuOpened} menuHandler = {menuHandler}/> : <Nav/> }
    </header>
  );
}

export default Header;
