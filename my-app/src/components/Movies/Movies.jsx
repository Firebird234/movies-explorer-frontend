import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

import MoviesList from "../MoviesList/MoviesList";
import { getMovies } from "../../utils/MovieApi";
import { FIlterByLength } from "../../functions/FIlterByLength";

function Movies({ saved, isLoading, cards, posterUrl, setCards, servErr, setIsLoading, setServErr, setSavedMovies, savedMovies }) {
  const [movies, setMovies] = React.useState([]);
  const [messge, setMessge] = React.useState("");

  const [renMovies, setRenMovies] = React.useState(0);
  const [addMovies, setAddMovies] = React.useState(0);

  const [bytton, setButton] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  function handleCheckbox() {
    setChecked(!checked);
  }

  useEffect(() => {
    window.addEventListener("resize", handleRender);
    handleInitialRen();
    handleRender();

    let savedDataMov = JSON.parse(localStorage.getItem("film-mov"));
    let savedDataCheck = JSON.parse(localStorage.getItem("film-check"));
    console.log(savedDataMov, savedDataCheck);

    localStorage.getItem("film-mov") && setMovies(savedDataMov || []);
    localStorage.getItem("film-check") && setChecked(savedDataCheck);

    return () => {
      window.removeEventListener("resize", handleRender);
    };
  }, []);

  useEffect(() => {
    renMovies >= movies.length ? setButton(false) : setButton(true);
  }, [movies, renMovies]);

  useEffect(() => {
    localStorage.setItem("film-check", checked);
  }, [checked]);

  function handleFilter(values) {
    handleInitialRen();
    handleRender();
    setIsLoading(true);
    getMovies()
      .then((allMovies) => {
        let searchCards = allMovies.filter((el) => {
          return el.nameRU.toLowerCase().includes(values["search-movies"].trim().toLowerCase());
        });
        // let searchAndFilteredCards = FIlterByLength(searchCards, checked);
        let checkedCards = searchCards.map((el) => {
          return {
            country: el.country || "unnknown",
            director: el.director,
            duration: el.duration,
            year: el.year,
            description: el.description,
            image: posterUrl + el.image.url,
            trailerLink: el.trailerLink,
            nameRU: el.nameRU,
            nameEN: el.nameEN || "unknown",
            thumbnail: posterUrl + el.image.formats.thumbnail.url,
            movieId: el.id,
          };
        });
        setServErr(false);
        if (searchCards.length === 0) {
          setMessge("???????????? ???? ??????????????");
          setMovies([]);
          localStorage.setItem("film-mov", JSON.stringify([]));
          localStorage.setItem("film-check", checked);
        } else {
          setMovies(checkedCards);
          localStorage.setItem("film-mov", JSON.stringify(checkedCards));
          localStorage.setItem("film-check", checked);
          setMessge("");
        }
      })
      .catch((err) => {
        setMovies([]);
        setMessge(
          "???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????"
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
    console.log(renMovies);
    setRenMovies((prev) => prev + addMovies);
  }

  // function handleCash(value) {
  //   console.log("local");
  //   let cash = JSON.parse(localStorage.getItem("film-query"));
  // localStorage.setItem(
  //   "film-query",
  //   JSON.stringify({
  //     ...cash,
  //     movies: movies,
  //     checked: checked,
  //     value: value,
  //     // value: values[`search-movies`]
  //   })
  // );
  // }

  return (
    <section className="movies">
      <SearchForm
        movies={movies}
        checked={checked}
        handleCheckbox={handleCheckbox}
        cards={cards}
        setCards={setCards}
        onSubmit={handleFilter}
        isLoading={isLoading}
        localName={"film-inp"}
        search={true}
      />

      <MoviesList
        setSavedMovies={setSavedMovies}
        savedMovies={savedMovies}
        servErr={servErr}
        messge={messge}
        saved={false}
        posterUrl={posterUrl}
        movies={checked ? FIlterByLength(movies) : movies.slice(0, renMovies)}
      />

      {bytton && (
        <button onClick={handleMore} className="movies__scroll-button">
          ??????
        </button>
      )}
    </section>
  );
}

export default Movies;
