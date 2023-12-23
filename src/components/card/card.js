import React from "react";
import "./card.css";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFavMovies, setFavMovies } from "../../store/slice/movies/movies";

function Card(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!props.movie.isFav) {
      dispatch(setFavMovies(props.movie));
    } else {
      dispatch(removeFavMovies(props.movie));
    }
  };

  return (
    <div className="card-container">
      <button className="heart-btn" onClick={() => handleClick()}>
        <FaHeart size={25} color={props.movie.isFav ? "red" : "grey"} />
      </button>

      <img src={props.image} alt="img" className="image" />
      <h4>{props.name}</h4>
    </div>
  );
}

export default Card;
