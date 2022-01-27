import "./styles.css";
import "./media.css";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul id="menu">
      <li className="navbar-item">
        <Link
          className="nav-link"
          to="/About"
          onClick={() => props.isMobile && props.closeMobileNav()}
        >
          About me
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="nav-link"
          to="/Proyects"
          onClick={() => props.isMobile && props.closeMobileNav()}
        >
          Proyects
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          className="nav-link"
          to="/Contact"
          onClick={() => props.isMobile && props.closeMobileNav()}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
