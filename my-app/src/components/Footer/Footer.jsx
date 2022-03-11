import React from "react";
import "./Footer.css"

function Footer (props) {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <div className="footer__copyright">&copy;	2020</div>
                <div className="footer__links">
                    <a className="footer__link" href="#">Яндекс.Практикум</a>
                    <a className="footer__link" href="#">Github</a>
                    <a className="footer__link" href="#">Facebook</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;