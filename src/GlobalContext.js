import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = (props) => {
  const [searchParam, setSearchParam] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleOnChange = (e) => setSearchParam(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://www.omdbapi.com/?s=${searchParam}&apikey=6149a503`
    );
    const data = await res.json();
    if (data) {
      setMovieList(data.Search);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        movieList,
        setSearchParam,
        handleOnChange,
        handleSubmit,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
