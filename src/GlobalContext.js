import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = (props) => {
  const [searchParam, setSearchParam] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => setSearchParam(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?s=${searchParam}&apikey=6149a503`
    );
    const data = await res.json();
    if (data) {
      setMovieList(data.Search);
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        movieList,
        loading,
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
