import React from "react";
import Card from "../card/card";
import "./moviesList.css";

function Movieslist({ movies }) {
  return (
    <div className="movies-list">
      {movies?.map((ele) => {
        return <Card key={ele.imdbID} name={ele.Title} image={ele.Poster} />;
      })}
    </div>
  );
}

export default Movieslist;
