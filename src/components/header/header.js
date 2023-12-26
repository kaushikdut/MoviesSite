import React from "react";
import "./header.css";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();

  let headerText = "";

  switch (location.pathname) {
    case "/":
      headerText = "Movie";
      break;
    case "/favourite":
      headerText = "Favourite";
      break;
    default:
      headerText = "Movie";
  }

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="header-text">{headerText}</h1>
      </Link>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          value={props.searchValue}
          placeholder="Search the movies..."
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
        <Link to="/favourite">
          <BsBookmarkHeartFill
            style={{ color: "white", width: "3rem", height: "2.5rem" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
