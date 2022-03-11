import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
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

function App() {

  //burger-state
const [menuOpened, setMenuOpened] = useState(true);

function menuHandler() {
  setMenuOpened(!menuOpened)
}


//end


  return (
    <div className="App">
      <div className="page">
        <div className="intro-page">
          <Routes>
            <Route path="/" element = {   
              <>         
                <Header loggedIn = {true} menuHandler = {menuHandler} menuOpened = {menuOpened}/>
                <Main/>
              </>  }/>
              
              <Route path="/movies" element = {   
              <>
                <Header loggedIn = {true} menuHandler = {menuHandler} menuOpened = {menuOpened}/>         
                <Movies/>
              </>  }/>

              <Route path="/saved-movies" element = {   
              <>
                <Header loggedIn = {true} menuHandler = {menuHandler} menuOpened = {menuOpened}/>         
                <Movies/>
              </>  }/>

              <Route path="/profile" element = {   
              <>         
                <Profile name = "Виталий" email = "pochta@yandex.ru"/>
              </>  }/>

              <Route path="/signup" element = {   
              <>         
                <RedForm name = "Виталий" email = "pochta@yandex.ru|" password = "33333333333333"/>
              </>  }/>

              <Route path="/signin" element = {   
              <>         
                <LogIn/>
              </>  }/>

              <Route path="*" element = {   
              <>         
                <NotFound/>
              </>  }/>
                        
          </Routes>
          <BurgerMenu menuHandler = {menuHandler} menuOpened = {menuOpened}/>
        </div>
      </div>
    </div>
  );
}

export default App;
