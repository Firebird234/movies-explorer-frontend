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

  //login
  function handleLogin(name, mail) {
    setIsLoading(true);
    MainApiObj.handleLogin(name, mail)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/main");
        console.log(res.token);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleRegister(data) {
    setIsLoading(true);
    MainApiObj.handleRegister(data)
      .then((res) => {
        navigate("/signin");
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }
  //endLogin

  function handleTokenCheck() {
    const myToken = localStorage.getItem("token");
    console.log(myToken);
    if (myToken) {
      MainApiObj.getUser()
        .then((logInData) => {
          setCurrentUser(logInData);
          console.log(logInData);
          if (logInData) {
            setLoggedIn(true);
            navigate("/main");
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
        console.log(Array.isArray(res));
        Array.isArray(res) ? setSavedMovies(res) : setSavedMovies([]);
      })
      .catch((err) => {
        console.log("my", err);
      });
  }

  useEffect(() => {
    handleTokenCheck();
    getSavedMov();
  }, []);

  return (
    <div className="App">
      <div className="page">
        <div className="intro-page">
          {isLoading && <div className="loader">ИДЕТ ЗАГРУЗКА, ПРОСЬБА ОСТАВАТЬСЯ НА МЕСТАХ И ЧИЛИТЬ</div>}
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route
                path="*"
                element={
                  <ProtectedRoute redirectTo={"signin"} loggedIn={loggedIn}>
                    <Routes>
                      <Route
                        path="/main"
                        element={
                          <>
                            <Header menuWhite={false} loggedIn={true} menuHandler={menuHandler} menuOpened={menuOpened} />
                            <Main />
                          </>
                        }
                      />

                      <Route
                        path="/movies"
                        element={
                          <>
                            <Header menuWhite={true} loggedIn={true} menuHandler={menuHandler} menuOpened={menuOpened} />

                            <Movies
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
                            <Header menuWhite={true} loggedIn={true} menuHandler={menuHandler} menuOpened={menuOpened} />
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
                            <Profile setCurrentUser={setCurrentUser} />
                          </>
                        }
                      />

                      <Route
                        path="*"
                        element={
                          <>
                            <NotFound />
                          </>
                        }
                      />
                    </Routes>
                  </ProtectedRoute>
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
                    <LogIn loggedIn={loggedIn} handleLogin={handleLogin} />
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
