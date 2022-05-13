import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound(props) {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найденa</p>

      <a onClick={() => navigate(-1)} className="notFound__backLink" href="#">
        Назад
      </a>
    </div>
  );
}

export default NotFound;
