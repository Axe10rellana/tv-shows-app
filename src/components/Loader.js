//react
import React from "react";

//css
import "./Loader.css";

//assets
import loader from "../assets/icons/oval.svg";

const Loader = () => {
  return (
    <div>
      <img className="loader" src={loader} alt="Cargando..."></img>
    </div>
  );
};

export default Loader;
