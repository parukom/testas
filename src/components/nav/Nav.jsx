import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../img/logo.png";

function Nav() {
  return (
    <div className="mainNavDiv">
      <nav className="navi">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" height="60px" />
          </Link>
        </div>
        <div>
          <button className="navButtons">
            <Link to="/login">Login </Link>
          </button>

          <button className="navButtons">
            <Link to="/register">Sign Up </Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
