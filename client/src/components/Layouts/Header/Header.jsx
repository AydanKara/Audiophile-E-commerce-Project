import { Link, NavLink } from "react-router-dom";
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
                <NavLink to="/" activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/catalog" activeClassName="active">
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink to="/create" activeClassName="active">
                      Create
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/profile" activeClassName="active">
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout">Logout</Link>
                  </li>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" activeClassName="active">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" activeClassName="active">
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
