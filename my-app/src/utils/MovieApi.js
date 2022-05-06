import React from "react";

export function checkRsponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    "Content-Type": "application/json",
  }).then((res) => checkRsponse(res));
}
