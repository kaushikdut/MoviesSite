import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/movies/movies";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
