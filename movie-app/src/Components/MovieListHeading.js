import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import MovieList from './MovieList';
import SearchInput from './SearchInput';
import Banner from './Banner';
import DefaultMovieList from './DefaultMovieList';
import NowPlaying from './NowPlaying';

const MovieListHeading = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    const toggle = () => setIsOpen(!isOpen);

    // get search results
    const getMovieRequest = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a7c80772`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <Router>
            <div className="container-fluid p-0">
                <Navbar className="navbar-dark" expand="md">
                    <NavbarBrand href="/">MDB</NavbarBrand>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">My Account</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>

                    <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />

                </Navbar>

                <Banner />

                <Routes>

                    <Route path="nowPlaying" element={<NowPlaying />} />

                </Routes>

                <DefaultMovieList />

                <MovieList movies={movies} />

            </div>

        </Router>
    );
}


export default MovieListHeading;