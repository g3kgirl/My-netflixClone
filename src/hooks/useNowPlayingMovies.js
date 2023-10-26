
<<<<<<< HEAD
import { useDispatch ,useSelector} from "react-redux";
import { useEffect, } from "react";

=======
import { useDispatch } from "react-redux";
import { useEffect } from "react";
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
import { Api_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/MoviesSlice";



const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
<<<<<<< HEAD
    const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies)
=======
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058

    const getNowPlayingMovies = async () => {
    
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_Options)
      const json = await data.json ();
      console.log(json.results)
      dispatch(addNowPlayingMovies(json.results));
    
    
    }
    useEffect(() =>{
<<<<<<< HEAD
      !nowPlayingMovie && getNowPlayingMovies();
=======
    getNowPlayingMovies();
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
    },[])
    
    



}

export default useNowPlayingMovies;