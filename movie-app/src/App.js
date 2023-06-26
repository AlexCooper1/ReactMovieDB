import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieListHeading from './Components/MovieListHeading';


const App = () => {


  return (

    <div className='movie-app p-0'>

      <div className='container-fluid p-0'>

        <div className='d-flex flex-wrap align-items-center justify-content-center p-0'>

          <MovieListHeading />

        </div>

      </div>

    </div>
  );
};

export default App;