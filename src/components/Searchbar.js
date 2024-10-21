//react
import { useState, useContext } from "react";

//components
import Alert from "./Alert";

//context
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";

const Searchbar = () => {
  //variables
  let [searchTerm, setSearchTerm] = useState("");

  //context variables
  const { searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertsContext);

  //functions
  const onSearchHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      setAlert("Por favor escribe algo", "danger");
    } else if (
      searchTerm === "." ||
      searchTerm === "," ||
      searchTerm === ";" ||
      searchTerm === "_" ||
      searchTerm === "{" ||
      searchTerm === "[" ||
      searchTerm === "]" ||
      searchTerm === "}" ||
      searchTerm === "`" ||
      searchTerm === "´" ||
      searchTerm === "¨" ||
      searchTerm === "+" ||
      searchTerm === "*" ||
      searchTerm === "'" ||
      searchTerm === "?" ||
      searchTerm === "\\" ||
      searchTerm === "¿" ||
      searchTerm === "¡" ||
      searchTerm === ")" ||
      searchTerm === "(" ||
      searchTerm === "&" ||
      searchTerm === "$" ||
      searchTerm === "#" ||
      searchTerm === '"' ||
      searchTerm === "!" ||
      searchTerm === "°" ||
      searchTerm === "¬" ||
      searchTerm === "<" ||
      searchTerm === ">" ||
      searchTerm === " "
    ) {
      setAlert("No hay datos", "warning");
      setSearchTerm("");
    } else {
      searchShows(searchTerm);
      setSearchTerm("");
    }
  };
  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Buscar shows de TV"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
