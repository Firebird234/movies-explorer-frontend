import React from "react";
import './SearchForm.css'

function SearchForm (props) {
    return (
        <form className="search-form">
            <div className="search-form__container">
                <input required type="text" name="search-movies" className="search-form__input" id="" placeholder="Фильм" />
                <button type="submit" className="search-form__submit"></button>
            </div>
                <label className="search-form__label">
                    <input type="checkbox" className="search-form__checkbox" />
                    <div className="search-form__custom-checkbox"></div>
                    Короткометражки
                </label>
        </form>
    )
}

export default SearchForm;