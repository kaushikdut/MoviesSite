import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favourite: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      if (action.payload) {
        for (let i = 0; i < action.payload.length; i++) {
          const exist = state.favourite.find(
            (movie) => movie.imdbID === action.payload[i].imdbID
          );
          if (exist) {
            action.payload[i].isFav = true;
          } else {
            action.payload[i].isFav = false;
          }
        }
        state.movies = [...action.payload];
      }
    },
    initialLoad(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        action.payload[i].isFav = false;
      }
      state.movies = [...action.payload];
    },
    setFavMovies(state, action) {
      const fav = state.movies.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      const exist = state.favourite.find(
        (movie) => movie.Title === action.payload.Title
      );

      if (fav && !exist) {
        fav.isFav = true;
        state.movies = [...state.movies];
        state.favourite = [...state.favourite, fav];
      }
    },
    removeFavMovies(state, action) {
      const fav = state.movies.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (fav) {
        fav.isFav = false;
        state.favourite = state.favourite.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        );
      }
    },
  },
});

export const { setMovies, initialLoad, setFavMovies, removeFavMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
