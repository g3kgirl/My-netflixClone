import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
<<<<<<< HEAD
        PopularMovies: null,
=======
>>>>>>> 39d65b8706ae733ad8e65e0ba574f53365a37058
        trailerVideo : null,
        
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;

        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload
        }
    }
})
export const  {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;