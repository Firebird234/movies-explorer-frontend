import React from "react";
import like from "../../images/like.svg";
import dislike from "../../images/dislike.svg";
import delMovie from "../../images/delMov.svg";
import Card from "../Card/Card";

export default function MoviesList({ movies, posterUrl, saved, messge, savedMovies, setSavedMovies }) {
  return (
    <div className="movies__items">
      <span className="movies__message">{messge}</span>
      {movies.map((el) => {
        return (
          <Card key={el.id || el.movieId} el={el} posterUrl={posterUrl} savedMovies={savedMovies} setSavedMovies={setSavedMovies} saved={saved} />
        );
      })}
    </div>
  );
}
