import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
  const getValueFromContext = useContext(GlobalContext);
  console.log(getValueFromContext.movieList);
  const { movieList, loading } = getValueFromContext;
  return (
    <>
      {loading && <div>Loading pls wait...</div>}
      {movieList && movieList.length > 0
        ? movieList.map((item) => (
            <div key={item.imdbID}>
              <img src={item.Poster} alt="" />
              <p>{item.Title}</p>
              <p>{item.Year}</p>
            </div>
          ))
        : null}
    </>
  );
};

export default MovieList;
