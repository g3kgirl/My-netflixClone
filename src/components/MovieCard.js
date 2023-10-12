import React from 'react'
import { IMG_CDN_url } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
        
        <img alt="moviecard"  src={IMG_CDN_url + posterPath}
        />
    </div>
  )
}

export default MovieCard