import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="header-wrapper">
          <a id="logo" href="/">
            <img src="/shared/logo.svg" alt="website logo" />
          </a>
          <nav>
            <ul id="nav-list">
              <li className="nav-item">
                <a href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a href="/catalog">Catalog</a>
              </li>
              <li className="nav-item">
                <a href="/create">Create</a>
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
