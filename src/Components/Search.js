import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const valueFromContext = useContext(GlobalContext);
  return (
    <>
      <form onSubmit={valueFromContext.handleSubmit}>
        <input
          type="text"
          name="movieName"
          placeholder="Movie Name"
          onChange={valueFromContext.handleOnChange}
          value={valueFromContext.searchParam}
        />
        <button disabled={valueFromContext.searchParam.length <= 2}>
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
