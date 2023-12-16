import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.image} alt="img" className="image" />
      <h4>{props.name}</h4>
    </div>
  );
}

export default Card;
