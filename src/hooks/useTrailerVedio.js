
    import  { useEffect } from 'react'
    import { useDispatch ,useSelector} from 'react-redux'
    import { addTrailerVideo } from '../utils/MoviesSlice'
    import { Api_Options } from '../utils/constants'

    const useTrailerVedio = (movieId) => {

      const dispatch = useDispatch();
<<<<<<< HEAD
const  trailesrVideos = useSelector((store) => store.movies.trailerVideo)
   
      
      
=======

   
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
    const getMoviVideos = async ()  => {

    const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
         movieId +"/videos?language=en-US",
     Api_Options)

    const json = await data.json();
    console.log(json ,"th")
    
    const filterData = json.results.filter((video) => video.type === "Teaser");
    const trailer = filterData.length ?  filterData[0] : json.results[0];
    console.log(trailer, "cc")
    dispatch(addTrailerVideo(trailer))
    }
    
    useEffect(()=>{
<<<<<<< HEAD
      
      !trailesrVideos && getMoviVideos();
=======
    getMoviVideos();
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
    },[])

}

export default useTrailerVedio