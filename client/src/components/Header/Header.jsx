import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="header-wrapper">
          <a id="logo" href="/">
            <img src="./src/assets/shared/logo.svg" alt="website logo" />
          </a>
          <nav>
            <ul id="nav-list">
              <li className="nav-item">
                <a href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a href="/products/headphones">HEADPHONES</a>
              </li>
              <li className="nav-item">
                <a href="/products/speakers">SPEAKERS</a>
              </li>
              <li className="nav-item">
                <a href="/products/earphones">EARPHONES</a>
              </li>
              <li className="nav-item">
                <a href="/register">Register</a>
              </li>
              <li className="nav-item">
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
