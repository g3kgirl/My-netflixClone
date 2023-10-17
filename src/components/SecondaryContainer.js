import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector ((store) => store.movies);
 
  return (
    movies.nowPlayingMovies && (

  <div className="bg-black" >

<div className="-mt-50 pl-10 relative z-20">
      <MovieList title={"Now Playing Movies "} movies={movies.nowPlayingMovies}/>
      <MovieList title={" Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming movies "} movies={movies.nowPlayingMovies}/>
      <MovieList title={" Popular"} movies={movies.PopularMovies}/>
      
    </div>

  </div>
    
      )
  )
}

export default SecondaryContainer