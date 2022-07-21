import "./App.css";
import Search from "./Components/Search";
import MovieList from "./Components/MovieList";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function App() {
  const valueFromContext = useContext(GlobalContext);
  const { movieList } = valueFromContext;
  return (
    <div
      style={{ backgroundColor: movieList.length > 0 ? "#CEE5D0" : null }}
      className="App"
    >
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
