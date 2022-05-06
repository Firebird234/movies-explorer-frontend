import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import useFormValidaion from "../../hooks/Validation";

import { getMovies } from "../../utils/MovieApi";

function SearchForm(props) {
  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(values);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input onChange={handleChange} required type="text" name="search-movies" className="search-form__input" id="" placeholder="Фильм" />
        <span className="errors">{errors["search-movies"]}</span>
        <button type="submit" className="search-form__submit"></button>
      </div>
      <label className="search-form__label">
        <input onChange={props.handleCheckbox} type="checkbox" className="search-form__checkbox" />
        <div className="search-form__custom-checkbox"></div>
        Короткометражки
      </label>
    </form>
  );
}

export default SearchForm;
