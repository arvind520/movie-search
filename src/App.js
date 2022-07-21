import "./App.css";
import Search from "./Components/Search";
import MovieList from "./Components/MovieList";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { movieList } = useContext(GlobalContext);
  return (
    <div
      style={{ backgroundColor: movieList.length > 0 ? "whitesmoke" : null }}
      className="App"
    >
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
