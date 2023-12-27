import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/header/header";
import Movieslist from "./components/moviesList/movieslist";
import { useCallback, useEffect, useMemo, useState } from "react";
import { initialLoad, setMovies } from "./store/slice/movies/movies";
import { Route, Routes } from "react-router-dom";
import Favourite from "./components/favourite/favourite";
import axios from "axios";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMoviesSearch = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;
    axios.get(url).then((post) => {
      dispatch(setMovies(post.data.Search));
    });
  };
  const fisrtLoad = useCallback(
    (searchMovies) => {
      const url = `https://www.omdbapi.com/?s=${searchMovies}&apikey=${process.env.REACT_APP_API_KEY}`;
      axios
        .get(url)
        .then((post) => {
          dispatch(initialLoad(post.data.Search));
        })
        .catch((err) => console.log(err));
    },
    [dispatch]
  );

  useEffect(() => {
    if (searchValue) {
      getMoviesSearch(searchValue);
    }
  }, [getMoviesSearch, searchValue]);

  useEffect(() => {
    fisrtLoad("star wars");
  }, [fisrtLoad]);

  const memoizedSearchValue = useMemo(() => {
    return searchValue;
  }, [searchValue]);

  return (
    <div className="App">
      <Header
        searchValue={memoizedSearchValue}
        setSearchValue={setSearchValue}
      />
      <Routes>
        <Route path="/" element={<Movieslist />} />
        <Route path="/:id" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
