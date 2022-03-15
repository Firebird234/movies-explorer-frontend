import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'
import like from '../../images/like.png';
import delMovie from '../../images/delMov.png'

function Movies({button, saved}) {
    return (
        <section className="movies">
            <SearchForm/>
            <div className="movies__items">
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>

                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>
                
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>
                
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>

                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>

                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>
                
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>
                
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>

                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>

                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>
                
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>
                
                <div className="movies__item">
                    <img className="movies__poster" src="https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F77e23f4061385eae011c2fc5ffda37ea.png" alt="Movie poster" />
                    <p className="movies__name">Don't look up <button className="movies__like-button"><img alt="like button" className="movies__like" src={saved ? delMovie : like}></img></button></p>
                    <span className="movies__duration">1ч 42мин</span>
                </div>

            </div>
            {button && <button className="movies__scroll-button">Еще</button>}
        </section>
    )
}

export default Movies;