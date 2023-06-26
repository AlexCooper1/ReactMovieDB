import React, { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';
import Movie from './Movie';

const DefaultMovieList = () => {
    const [popular, setPopular] = useState([]);
    const [movies, setMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=ded89159355ae9796d394d9101aebf95&language=en-US&page=1";

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch(popularUrl);
        const movies = await data.json();
        console.log(movies);
        setPopular(movies.results);
    };

    const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=ded89159355ae9796d394d9101aebf95&language=en-US&page=1";

    useEffect(() => {
        fetchTopRated();
    }, []);

    const fetchTopRated = async () => {
        const data = await fetch(topRatedUrl);
        const movies = await data.json();
        console.log(movies);
        setTopRated(movies.results);
    };


    return (
        <div className="container-fluid">
            <h1 className="display-5 mt-3">Popular Movies</h1>
            <div className='justify-content-start m-1 movie-list d-flex'>
                {popular.map(movie => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        popularity={movie.popularity}
                        release_date={movie.release_date}
                        image={movie.poster_path}
                    />
                ))}
            </div>

            <h1 className="display-5">Top Rated</h1>
            <div className='justify-content-start m-1 movie-list d-flex'>
                {topRated.map(movie => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        popularity={movie.popularity}
                        release_date={movie.release_date}
                        image={movie.poster_path}
                    />
                ))}
            </div>

        </div>
    );
}


export default DefaultMovieList;