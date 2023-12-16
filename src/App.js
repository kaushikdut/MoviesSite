import "./App.css";
import Header from "./components/header/header";
import Movieslist from "./components/moviesList/movieslist";

import { useEffect, useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMoviesSearch = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((post) => setMovies(post.Search));
  };

  useEffect(() => {
    getMoviesSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Movieslist movies={movies} />
    </div>
  );
}

export default App;
