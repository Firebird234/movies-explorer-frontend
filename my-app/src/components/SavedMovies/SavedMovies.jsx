import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import like from "../../images/like.svg";
import delMovie from "../../images/delMov.svg";
import MoviesList from "../MoviesList/MoviesList";
import MainApiObj from "../../utils/MainApi";
import { FIlterByLength } from "../../functions/FIlterByLength";

function SavedMovies({ saved, isLoading, cards, posterUrl, setCards, servErr, setIsLoading, setServErr, setSavedMovies, savedMovies, getSavedMov }) {
  // const [movies, setMovies] = React.useState([]);
  const [messge, setMessge] = React.useState("");

  const [renMovies, setRenMovies] = React.useState(0);
  const [addMovies, setAddMovies] = React.useState(0);

  const [bytton, setButton] = React.useState(false);

  const [checked, setChecked] = React.useState(false);

  const [noSavMov, setNoSetMov] = React.useState("");

  React.useEffect(() => {
    console.log(noSavMov);
    noSavMov.message && setMessge(noSavMov[`message`]);
    noSavMov.message && localStorage.setItem("savedFilm-mov", JSON.stringify([]));
  }, [noSavMov, messge]);

  function handleCheckbox() {
    setChecked(!checked);
  }

  useEffect(() => {
    handleRender();
    window.addEventListener("resize", handleRender);
    handleInitialRen();
    getSavedMov();
    let savedDataMov = JSON.parse(localStorage.getItem("savedFilm-mov"));
    let savedDataCheck = JSON.parse(localStorage.getItem("savedFilm-check"));
    console.log(savedDataMov, savedDataCheck);

    localStorage.getItem("savedFilm-mov") ? setSavedMovies(savedDataMov || []) : getSavedMov();
    localStorage.getItem("savedFilm-check") && setChecked(savedDataCheck);

    return () => {
      window.removeEventListener("resize", handleRender);
    };
  }, []);

  useEffect(() => {
    renMovies >= savedMovies.length ? setButton(false) : setButton(true);
  }, [savedMovies, renMovies]);

  function handleFilter(values) {
    handleInitialRen();
    handleRender();
    setIsLoading(true);
    MainApiObj.getSavedMov()
      .then((allMovies) => {
        setNoSetMov(allMovies);
        let searchCards = allMovies.filter((el) => {
          return el.nameRU.toLowerCase().includes(values["search-movies"].trim().toLowerCase());
        });
        let checkedCards = searchCards.map((el) => {
          return {
            country: el.country || "unnknown",
            director: el.director,
            duration: el.duration,
            year: el.year,
            description: el.description,
            image: el.image,
            trailerLink: el.trailerLink,
            nameRU: el.nameRU,
            nameEN: el.nameEN || "unknown",
            thumbnail: el.thumbnail,
            movieId: el.movieId,
            _id: el._id,
          };
        });
        setServErr(false);
        if (searchCards.length === 0) {
          setMessge("Ничего не найдено");
          setSavedMovies([]);
          localStorage.setItem("savedFilm-mov", JSON.stringify([]));
          localStorage.setItem("savedFilm-check", checked);
        } else {
          setSavedMovies(checkedCards);
          localStorage.setItem("savedFilm-mov", JSON.stringify(checkedCards));
          localStorage.setItem("savedFilm-check", checked);
          setMessge("");
        }
      })
      .catch((err) => {
        setSavedMovies([]);
        setMessge(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleRender() {
    if (window.innerWidth >= 1280) {
      setAddMovies(4);
    } else if (window.innerWidth >= 990) {
      setAddMovies(3);
    } else if (window.innerWidth >= 768) {
      setAddMovies(2);
    } else {
      setAddMovies(7);
    }
    console.log(window.innerWidth);
  }

  function handleInitialRen() {
    if (window.innerWidth >= 1280) {
      setRenMovies(12);
    } else if (window.innerWidth >= 990) {
      setRenMovies(9);
    } else if (window.innerWidth >= 768) {
      setRenMovies(6);
    } else {
      setRenMovies(7);
    }
  }

  function handleMore() {
    console.log(renMovies, addMovies);
    setRenMovies((prev) => prev + addMovies);
  }

  // function handleCash(value) {
  //   let cash = JSON.parse(localStorage.getItem("film-query"));
  //   localStorage.setItem(
  //     "film-query",
  //     JSON.stringify({
  //       ...cash,
  //       savedMovies: savedMovies,
  //       savedChecked: checked,
  //       savedValue: value,
  //       // value: values[`search-movies`]
  //     })
  //   );
  // }

  // const isShown = movies.slice(0, renMovies).length < movies.length;

  return (
    <section className="movies">
      <SearchForm
        handleCheckbox={handleCheckbox}
        cards={cards}
        setCards={setCards}
        onSubmit={handleFilter}
        isLoading={isLoading}
        localName={"savedFilm-inp"}
        search={false}
      />

      <MoviesList
        setSavedMovies={setSavedMovies}
        savedMovies={savedMovies}
        servErr={servErr}
        messge={messge}
        saved={true}
        posterUrl={posterUrl}
        movies={checked ? FIlterByLength(savedMovies) : savedMovies.slice(0, renMovies)}
      />

      {bytton && (
        <button onClick={handleMore} className="movies__scroll-button">
          Еще
        </button>
      )}
    </section>
  );
}

export default SavedMovies;
