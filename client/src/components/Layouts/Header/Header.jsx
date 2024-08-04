import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import AuthContext from "../../../context/authContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header>
      <div className="container">
        <div id="header-wrapper">
          <Link className="logo" to="/">
            <img src="/shared/logo.svg" alt="website logo" />
          </Link>
          <nav>
            <ul id="nav-list">
              <li className="nav-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/catalog">Catalog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/create">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout">Logout</Link>
                  </li>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
