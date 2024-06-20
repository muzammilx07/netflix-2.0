import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerMovie: null,
    selectedMovieId: null,
    isOpen: false,
    onDailog: false,
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    getId: (state, action) => {
      state.selectedMovieId = action.payload;
    },
    setOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    setDailog: (state, action) => {
      state.onDailog = !state.onDailog;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
  getTrailerMovie,
  getId,
  setOpen,
  setDailog,
} = movieSlice.actions;

export default movieSlice.reducer;
