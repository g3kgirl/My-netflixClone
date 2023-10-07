
    import  { useEffect } from 'react'
    import { useDispatch ,useSelector} from 'react-redux'
    import { addTrailerVideo } from '../utils/MoviesSlice'
    import { Api_Options } from '../utils/constants'

    const useTrailerVedio = (movieId) => {

      const dispatch = useDispatch();

   
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
    getMoviVideos();
    },[])

}

export default useTrailerVedio