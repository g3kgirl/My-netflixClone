
import { useDispatch ,useSelector} from "react-redux";
import { useEffect, } from "react";

import { Api_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MoviesSlice";



const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
    
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_Options)
      const json = await data.json ();
      console.log(json.results)
      dispatch(addNowPlayingMovies(json.results));
    
    
    }
    useEffect(() =>{
      !nowPlayingMovie && getNowPlayingMovies();
    },[])
    
    



}

export default useNowPlayingMovies;