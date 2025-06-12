import "./index.css";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="nav-container">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="nav-img"
        alt="wave"
      />
      <h1 clssName="heading">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/About">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/Contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
