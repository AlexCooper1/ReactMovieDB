import React, { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';
import Movie from './Movie';


const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([]);

    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";

    useEffect(() => {
        fetchNowPlaying();
    }, []);

    const fetchNowPlaying = async () => {
        const data = await fetch(nowPlayingUrl);
        const movies = await data.json();
        console.log(movies);
        setNowPlaying(movies.results);
    };

    return (
        <div className="container-fluid">
            <h1 className="display-5 mt-3">Now Playing</h1>
            <div className='justify-content-start m-1 movie-list d-flex'>
                {nowPlaying.map(movie => (
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
    )

}

export default NowPlaying;