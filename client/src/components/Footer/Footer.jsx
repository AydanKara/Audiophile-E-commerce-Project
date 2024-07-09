import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span id="line" />
        <div id="footer-wrapper">
          <div id="footer-nav">
            <a id="logo" href="/">
              <img src="/shared/logo.svg" alt="" />
            </a>
            <nav>
              <ul id="nav-list">
                <li className="nav-item">HOME</li>
                <li className="nav-item">HEADPHONES</li>
                <li className="nav-item">SPEAKERS</li>
                <li className="nav-item">EARPHONES</li>
              </ul>
            </nav>
          </div>
          <div id="footer-desc">
            <div id="footer-info">
              <p>
                Audiophile is an all in one stop to fulfill your audio needs.
                We`re a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <p>Copyright 2024. All Rights Reserved</p>
            </div>
            <div id="footer-social">
              <a className="social-logo facebook" href="/" />
              <a className="social-logo x" href="/" />
              <a className="social-logo instagram" href="/" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
