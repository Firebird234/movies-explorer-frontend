import React from "react";
import "./Autor.css"
import photo from "../../images/pic__COLOR_pic.png"

function Author(props) {
    return(
        <section className="author">
            <h2 className="author__headline">Студент</h2>
            <div className="author__underline"></div>

            <div className="author__container">
                <div className="author__text-container">
                    <h2 className="author__title">Виталий</h2>
                    <h3 className="author__subtitle">Фронтенд-разработчик, 30 лет</h3>
                    <p className="author__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="author__links">
                    <a href="" className="author__link">Facebook</a>
                    <a href="" className="author__link">Github</a>
                    </div>
                </div>
                <img src={photo} alt="author-photo" className="author__photo" />
            </div>

            <div className="author__portfolio">
                <h3 className="author__portfolio-title">Портфолио</h3>
                <a href="https://firebird234.github.io" className="author__portfolio-item">
                    <p className="author__portfolio-name">Статичный сайт</p>
                    <a href="https://firebird234.github.io"><div className="author__portfolio-button"></div></a>
                </a>
                <a href="https://firebird234.github.io" className="author__portfolio-item">
                    <p className="author__portfolio-name">Адаптивный сайт</p>
                    <a href="https://firebird234.github.io"><div className="author__portfolio-button"></div></a>
                </a>
                <a href="https://firebird234.github.io" className="author__portfolio-item">
                    <p className="author__portfolio-name">Одностраничное приложение</p>
                    <div className="author__portfolio-button"></div>
                </a>
            </div>

        </section>
    )
}

export default Author;