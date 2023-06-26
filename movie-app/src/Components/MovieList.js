import React from 'react';
import '../App.css';

const MovieList = (props) => {

    return (
        <div>
            <h1 className="display-5 m-2">Search Results</h1>

            <div className='movie-list col-sm d-flex'>

                {props.movies.map((movie, index) => (
                    <div className='image-container justify-content-start m-3 d-flex'>
                        <img src={movie.Poster} alt='movie'></img>
                        <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify content-center">

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;