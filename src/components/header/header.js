import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>Movies</h1>
      <div className="search-bar">
        <input
          className="search"
          type="text"
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
        <button className="search-btn">+</button>
      </div>
    </div>
  );
}

export default Header;
