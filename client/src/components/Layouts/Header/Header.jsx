import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import AuthContext from "../../../context/authContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header>
      <div className="container">
        <div id="header-wrapper">
          <NavLink className="logo" to="/">
            <img src="/shared/logo.svg" alt="website logo" />
          </NavLink>
          <nav>
            <ul id="nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/catalog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/create"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Create
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/profile"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Login
                    </NavLink>
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
