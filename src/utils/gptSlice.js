import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
reducers:{
    toggleGptSearchView : (state) => {
        state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult : (state,action) => {

// extracting a value from action

const {movieNames,movieResults} = action.payload
        // how to add more data in same action

state.movieResults = movieResults;
state.movieNames = movieNames
    }
}
})

export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;