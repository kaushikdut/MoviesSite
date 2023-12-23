import React from "react";
import Card from "../card/card";
import "./moviesList.css";
import { useSelector } from "react-redux";

function Movieslist() {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div className="movies-list">
      {movies?.map((ele) => {
        return (
          <Card
            key={movies.indexOf(ele)}
            movie={ele}
            name={ele.Title}
            image={ele.Poster}
          />
        );
      })}
    </div>
  );
}

export default Movieslist;
