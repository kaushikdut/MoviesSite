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
        const favouriteIds = new Set(
          state.favourite.map((movie) => movie.imdbID)
        );

        const updatedMovies = action.payload.map((movie) => ({
          ...movie,
          isFav: favouriteIds.has(movie.imdbID),
        }));

        state.movies = updatedMovies;
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
        (movie) => movie.imdbID === action.payload.imdbID
      );

      if (fav && !exist) {
        fav.isFav = true;
        state.movies = [...state.movies];
        state.favourite = [...state.favourite, fav];
      }
    },
    removeFavMovies(state, action) {
      state.favourite = state.favourite.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      const fav = state.movies.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (fav) {
        fav.isFav = false;
      }
    },
  },
});

export const { setMovies, initialLoad, setFavMovies, removeFavMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
