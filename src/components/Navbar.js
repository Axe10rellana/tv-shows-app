//react-router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/">
              <i className="fas fa-video"></i> Shows de TV
            </Link>
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <Link to="/">Inicio</Link>
            </li>
            <li className="links__link">
              <Link to="/acerca">Acerca</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
