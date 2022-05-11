import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import useFormValidaion from "../../hooks/Validation";

import { getMovies } from "../../utils/MovieApi";

function SearchForm(props) {
  const { values, errors, isValid, handleChange, setValues } = useFormValidaion();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem(`${props.localName}`, values[`search-movies`]);
    props.onSubmit(values);
  }

  useEffect(() => {
    localStorage.getItem(`${props.localName}`) && setValues({ [`search-movies`]: localStorage.getItem(`${props.localName}`) });
  }, []);

  // useEffect(() => {
  //   props.handleCash(values[`search-movies`]);
  // }, [values]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          value={values[`search-movies`]}
          onChange={handleChange}
          required={props.search}
          type="text"
          name="search-movies"
          className="search-form__input"
          id=""
          placeholder="Фильм"
        />
        <span className="errors">{errors["search-movies"]}</span>
        <button type="submit" className="search-form__submit"></button>
      </div>
      <label className="search-form__label">
        <input checked={props.checked} onChange={props.handleCheckbox} type="checkbox" className="search-form__checkbox" />
        <div className="search-form__custom-checkbox"></div>
        Короткометражки
      </label>
    </form>
  );
}

export default SearchForm;
