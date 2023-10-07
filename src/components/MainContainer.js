import React from 'react'
import { useSelector } from 'react-redux'
import VedioBackground from './VedioBackground'
import VedioTitle from './VedioTitle'
const MainContainer = () => {
const movies = useSelector(store=> store.movies?.nowPlayingMovies)
// this is known as early return
if(movies === null)return;

const mainMovie = movies[0];
console.log(mainMovie)

const {original_title,overview,id} = mainMovie
  return (

    <div>
      <VedioTitle title={original_title} overview={overview}/>

      <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer