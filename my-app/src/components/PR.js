function handleFilter(values) {
  setIsLoading(true);
  getMovies()
    .then((allMovies) => {
      let searchCards = allMovies.filter((el) => {
        return el.nameRU
          .toLowerCase()
          .includes(values["search-movies"].trim().toLowerCase());
      });
      setServErr(false);
      if (searchCards.length === 0) {
        setMessge("Ничего не найдено");
        setMovies([]);
      } else {
        setMovies(searchCards);
      }
    })
    .catch((err) => {
      setServErr(true);
      console.log(err);
    })
    .finally(() => setIsLoading(false));
}
