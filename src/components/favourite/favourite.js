import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/card";

function Favourite() {
  const favMovies = useSelector((state) => state.movies.favourite);
  return (
    <div className="movies-list">
      {favMovies?.map((ele) => (
        <Card
          key={favMovies.indexOf(ele)}
          movie={ele}
          name={ele.Title}
          image={ele.Poster}
        />
      ))}
    </div>
  );
}

export default Favourite;
