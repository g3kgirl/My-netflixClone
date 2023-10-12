import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/MoviesSlice";



const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
    
      const data = await fetch( 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_Options)
      const json = await data.json ();
      console.log( "thisis",json.results)
      dispatch(addPopularMovies(json.results));
    
    
    }
    useEffect(() =>{
    getPopularMovies();
    },[])
    
    



}

export default usePopularMovies;