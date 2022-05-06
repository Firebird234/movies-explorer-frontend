import React from "react";

export class MainApi {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  handleLogin(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: data.Email,
        password: data.Password,
      }),
    }).then((res) => this._checkResponse(res));
  }

  handleRegister(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.Name,
        email: data.Email,
        password: data.Password,
      }),
    }).then((res) => this._checkResponse(res));
  }

  saveMovies(el, postUrl) {
    let { country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId, owner } = el;

    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        owner,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteMovies(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getSavedMov() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  updateUser(newData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(newData),
    }).then((res) => this._checkResponse(res));
  }
}

const MainApiObj = new MainApi("https://api.ave-emperror.nomoredo.nomoredomains.work", {
  authorization: localStorage.getItem("token"),
  "Content-Type": "application/json",
});

export default MainApiObj;
