<<<<<<< HEAD
import { useDispatch,useSelector } from "react-redux";
import { useEffect ,} from "react";
=======
import { useDispatch } from "react-redux";
import { useEffect } from "react";
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
import { Api_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/MoviesSlice";



const usePopularMovies = () => {

    const dispatch = useDispatch();
<<<<<<< HEAD
    const popularMovie = useSelector ((store) => store.movies.PopularMovies)
=======
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058

    const getPopularMovies = async () => {
    
      const data = await fetch( 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_Options)
      const json = await data.json ();
      console.log( "thisis",json.results)
      dispatch(addPopularMovies(json.results));
    
    
    }
    useEffect(() =>{
<<<<<<< HEAD
      !popularMovie && getPopularMovies();
=======
    getPopularMovies();
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
    },[])
    
    



}

export default usePopularMovies;