
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/LanguageConstant'
import openai from '../utils/OpenAI'
import { Api_Options } from '../utils/constants'
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchbar = () => {
  const dispatch = useDispatch();
  const langChangeDynamic = useSelector((store) => store.config.lang)
const searchText = useRef(null,)


const searchMovieTmdb = async(movie) => {
  
  const data = await fetch(

    "https://api.themoviedb.org/3/search/movie?query=" +
    movie +
    "&include_adult=false&language=en-US&page=1", Api_Options)

    const json  = await data.json()
    
    return json.results;
}

const handleSearchBtn =  async() => {


const gptQUuery =
"Act as a Movie Recommendation system and suggest some movies for the query : " +
searchText.current.value +
". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";




  const gptResult = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQUuery  }],
    model: 'gpt-3.5-turbo',
  });

  if (!gptResult.choices) {
  
  }



  console.log(gptResult.choices?.[0]?.message?.content);
  const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");


  const promiseArray = gptMovies.map((movie) =>  searchMovieTmdb(movie));

  const tmdbResults = await Promise.all(promiseArray);

  console.log(tmdbResults);


  dispatch( addGptMovieResult(   {movieNames : gptMovies, movieResults: tmdbResults} ) );




}


  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input
            ref={searchText}
             type="text" 
            className='p-4 m-4 col-span-9'
             placeholder={lang[langChangeDynamic].gptSearchPlaceholder} />
            <button className=' col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg' 
            onClick={handleSearchBtn}
            >
              {lang[langChangeDynamic].search}
              </button>
        </form>
    </div>
  )
}

export default GptSearchbar