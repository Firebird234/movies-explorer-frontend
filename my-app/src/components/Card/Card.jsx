import React, { useEffect } from "react";
import like from "../../images/like.svg";
import dislike from "../../images/dislike.svg";
import delMovie from "../../images/delMov.svg";
import MainApiObj from "../../utils/MainApi";

export default function Card({ el, posterUrl, savedMovies, setSavedMovies, saved }) {
  const [likeButton, setLiikeButton] = React.useState(false);

  const hours = el.duration / 60 >= 1 ? Math.floor(el.duration / 60) + " ч " : "";
  const minutes = el.duration % 60 === 0 ? "" : (el.duration % 60) + " мин";
  const isSaved = savedMovies.some((i) => i.movieId === el.movieId);

  useEffect(() => {
    if (isSaved) {
      // savedMovies.forEach((saved) => {
      //   saved.movieId === el.movieId && (el._id = saved._id);
      // });
      setLiikeButton(true);
      console.log(savedMovies);
    } else {
      setLiikeButton(false);
    }
  }, []);

  // useEffect(() => {
  //   console.log(savedMovies);
  // }, [savedMovies]);

  function handleLike() {
    saved ? disLikeMov() : isSaved ? disLikeMov() : likeMov();
  }

  function likeMov() {
    MainApiObj.saveMovies(el, posterUrl)
      .then((mov) => {
        console.log(mov);
        setLiikeButton(true);
        setSavedMovies([...savedMovies, mov]);
      })
      .catch((err) => console.log(err));
  }

  function disLikeMov() {
    let id = savedMovies.find((sv) => sv.movieId === el.movieId)._id;
    console.log(id, el);
    MainApiObj.deleteMovies(id)
      .then((mov) => {
        setLiikeButton(false);
        console.log(savedMovies.filter((s) => s.movieId === el.movieId));
        setSavedMovies(savedMovies.filter((s) => s.movieId !== el.movieId));
      })
      .catch((err) => console.log(err));
  }
  //savedMovies.some((i) => i.movieId === el.movieId);
  return (
    <div className="movies__item">
      <a target="_blank" href={el.trailerLink} className="movie__link">
        <img className="movies__poster" src={`${el.image}`} alt="Movie poster" />
      </a>
      <p className="movies__name">
        {el.nameRU}{" "}
        <button onClick={handleLike} className="movies__like-button">
          <img alt="like button" className="movies__like" src={saved ? delMovie : likeButton ? like : dislike}></img>
        </button>
      </p>
      <span className="movies__duration">{hours + minutes}</span>
    </div>
  );
}
