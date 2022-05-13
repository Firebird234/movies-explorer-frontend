import { useEffect, useState } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Author from "./components/Author/Author";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import LogIn from "./components/LogIn/LogIn";
import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import RedForm from "./components/RedForm/RedForm";
import Technologies from "./components/Technologies/Technologies";
import { getMovies } from "./utils/MovieApi";
import MainApiObj from "./utils/MainApi";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import { CurrentUserContext } from "./contexts/userContext";
import Loader from "./components/Loader/Loader";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});

  const [servErr, setServErr] = useState(false);
  const [cards, setCards] = useState([]);

  //burger-state
  const [menuOpened, setMenuOpened] = useState(true);
  function menuHandler() {
    setMenuOpened(!menuOpened);
  }
  //end burger-state

  //loader-state
  const [isLoading, setIsLoading] = useState(false);

  //end loader-state

  const [loggedIn, setLoggedIn] = useState(false);

  //saved-movies
  const [savedMovies, setSavedMovies] = useState([]);
  //end saved-movies

  const [displayMov, setdisplayMov] = useState([]);

  //login
  function handleLogin(data, endPoint) {
    setIsLoading(true);
    MainApiObj.handleLogin(data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate(endPoint);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleRegister(data, endPoint) {
    setIsLoading(true);
    MainApiObj.handleRegister(data, endPoint)
      .then((res) => {
        handleLogin(data, endPoint);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }
  //endLogin

  function handleTokenCheck(bool) {
    const myToken = localStorage.getItem("token");
    if (myToken) {
      MainApiObj.getUser(myToken)
        .then((logInData) => {
          setCurrentUser(logInData);
          if (logInData) {
            setLoggedIn(true);
            // bool && navigate("/movies");
          }
        })
        .catch((err) => {
          console.log("my", err);
        });
    }
  }

  function getSavedMov() {
    MainApiObj.getSavedMov()
      .then((res) => {
        Array.isArray(res) ? setSavedMovies(res) : setSavedMovies([]);
        Array.isArray(res) ? setdisplayMov(res) : setdisplayMov([]);
      })
      .catch((err) => {
        console.log("my", err);
      });
  }

  useEffect(() => {
    console.log(loggedIn, "changed");
    handleTokenCheck(true);
    loggedIn && getSavedMov();
  }, [loggedIn]);

  useEffect(() => {
    MainApiObj._headers.authorization = localStorage.getItem("token");
    console.log(MainApiObj);
  }, [loggedIn]);

  return (
    <div className="App">
      <div className="page">
        <div className="intro-page">
          {isLoading && <Loader />}
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route
                path="/main"
                element={
                  <>
                    <Header menuWhite={false} loggedIn={loggedIn} menuHandler={menuHandler} menuOpened={menuOpened} />
                    <Main />
                  </>
                }
              />

              <Route
                path="/signup"
                element={
                  <>
                    <RedForm handleRegister={handleRegister} loggedIn={loggedIn} name="Виталий" email="pochta@yandex.ru" password="33333333333333" />
                  </>
                }
              />

              <Route
                path="/signin"
                element={
                  <>
                    <LogIn setCurrentUser={setCurrentUser} loggedIn={loggedIn} handleLogin={handleLogin} />
                  </>
                }
              />

              <Route path="/" element={<ProtectedRoute redirectTo={"/main"} loggedIn={loggedIn} />}>
                <Route
                  path="/movies"
                  element={
                    <>
                      <Header menuWhite={true} loggedIn={loggedIn} menuHandler={menuHandler} menuOpened={menuOpened} />

                      <Movies
                        displayMov={displayMov}
                        savedMovies={savedMovies}
                        setSavedMovies={setSavedMovies}
                        setServErr={setServErr}
                        servErr={servErr}
                        posterUrl={"https://api.nomoreparties.co/"}
                        cards={cards}
                        setCards={setCards}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        button={true}
                      />
                      <Footer />
                    </>
                  }
                />

                <Route
                  path="/saved-movies"
                  element={
                    <>
                      <Header menuWhite={true} loggedIn={loggedIn} menuHandler={menuHandler} menuOpened={menuOpened} />
                      <SavedMovies
                        setSavedMovies={setSavedMovies}
                        savedMovies={savedMovies}
                        setServErr={setServErr}
                        servErr={servErr}
                        setCards={setCards}
                        posterUrl={"https://api.nomoreparties.co/"}
                        cards={cards}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        saved={true}
                        getSavedMov={getSavedMov}
                      />
                      <Footer />
                    </>
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <>
                      <Header menuWhite={true} loggedIn={loggedIn} menuHandler={menuHandler} menuOpened={menuOpened} />
                      <Profile
                        setSavedMovies={setSavedMovies}
                        setLoggedIn={setLoggedIn}
                        handleTokenCheck={handleTokenCheck}
                        setCurrentUser={setCurrentUser}
                      />
                    </>
                  }
                />
              </Route>

              <Route
                path="*"
                element={
                  <>
                    <NotFound />
                  </>
                }
              />
            </Routes>
            <BurgerMenu menuHandler={menuHandler} menuOpened={menuOpened} />
          </CurrentUserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
