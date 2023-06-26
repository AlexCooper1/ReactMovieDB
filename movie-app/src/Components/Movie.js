import React from "react";
import '../App.css';

const Movie = ({ image }) => {

    return (

        <div className="m-2 image-container">

            <img src={"https://image.tmdb.org/t/p/w200/" + image} alt='movie' />

        </div>
    );
};

export default Movie;


