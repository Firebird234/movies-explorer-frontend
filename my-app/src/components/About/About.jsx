import React from "react";
import './About.css'

function About(props) {
    return (
        <section className="about">

            <h2 className="about__title">О проекте</h2>
            <div className="about__underline"></div>

            <div className="about__diplom-container">
                <div className="about__diplom-plan">
                <h2 className="about__diplom-stages-title">Дипломный проект включал 5 этапов</h2>
                <h3 className="about__diplom-stages">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h3>
                </div>
                <div className="about__diplom-timeline">
                <h2 className="about__diplom-deadline-title">На выполнение диплома ушло 5 недель</h2>
                <h3 className="about__diplom-deadline">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h3>
                </div>
            </div>

            <div className="about__graph">
                <div className="about__back"><span>1 неделя</span></div>
                <div className="about__front"><span>4 недели</span></div>
            </div>
            <div className="about__text-container">
                <h2 className="about__back-subtitle">Back-end</h2>
                <h2 className="about__front-subtitle">Front-end</h2>
            </div>
            </section>

    )
}

export default About;