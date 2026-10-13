import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name: 'movies',
        initialState: {
            nowPlayingMovies: null,
            trendingMovies: null,
            topRatedMovies: null,
            upComingMovies: null,
            comedyMovies: null,
            trailerKey: null,
            // movieGenres: null,
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            addTrendingMovies: (state, action) => {
                state.trendingMovies = action.payload;
            },
            addTopRatedMovies: (state, action) => {
                state.topRatedMovies = action.payload;
            },
            addUpComingMovies: (state, action) => {
                state.upComingMovies = action.payload;
            },
            addComedyMovies: (state, action) => {
                state.comedyMovies = action.payload;
            },
            addTrailerKey: (state, action) => {
                state.trailerKey = action.payload;
            },
            // addMovieGenres: (state, action) => {
            //     state.movieGenres = action.payload;
            // },
            removeMovie: (state) => {
                state.nowPlayingMovies = null;
                state.trendingMovies = null;
                state.topRatedMovies = null;
                state.upComingMovies = null;
                state.comedyMovies = null;
                state.trailerKey = null;
            },
        }
    }
)

export const {addNowPlayingMovies, addTrendingMovies, addTrailerKey, addTopRatedMovies,addUpComingMovies,addComedyMovies, removeMovie} = movieSlice.actions;

export default movieSlice.reducer;