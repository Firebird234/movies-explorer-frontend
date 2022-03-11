import React from "react";
import "./Technologies.css"

function Technologies(props) {
    return(
        <section className="technologies">
            <h2 className="technologies__headline">Технологии</h2>
            <div className="technologies__underline"></div>

            <h2 className="technologies__title">7 технологий</h2>
            <h3 className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
               
            <div className="technologies__items">
                <div className="technologies__item"><span>HTML</span></div>
                <div className="technologies__item"><span>CSS</span></div>
                <div className="technologies__item"><span>JS</span></div>
                <div className="technologies__item"><span>React</span></div>
                <div className="technologies__item"><span>Git</span></div>
                <div className="technologies__item"><span>Express.js</span></div>
                <div className="technologies__item"><span>mongoDB</span></div>
            </div>


        </section>
    )
}

export default Technologies