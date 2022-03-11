import React from "react";
import './NotFound.css';

function NotFound(props) {
    return (
        <div className="notFound">
            <h2 className="notFound__title">404</h2>
            <p className="notFound__subtitle">Страница не найденa</p>

            <a className="notFound__backLink" href="#">Назад</a>
        </div>
    )
}

export default NotFound;