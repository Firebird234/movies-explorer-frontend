import React from "react";
import About from "../About/About";
import Author from "../Author/Author";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Movies from "../Movies/Movies";
import Technologies from "../Technologies/Technologies";

function Main(props) {
    return (
        <main className="content">
            <Intro/>
            <About/>
            <Technologies/>
            <Author/>
            <Footer/>
        </main>
    )
}
export default Main;