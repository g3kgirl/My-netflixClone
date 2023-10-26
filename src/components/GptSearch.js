import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchbar from './GptSearchbar'
import { BG_url,  } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed  -z-10'>
        <img 
        src={BG_url}
        alt="logo"
        />
        </div>
        
        <GptSearchbar/>
        <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch