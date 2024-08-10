import { Link } from "react-router-dom";
import "./Hero.css"

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div id="hero-wrapper">
          <h1 id="hero-heading">BRINGING YOU THE BEST AUDIO GEAR</h1>
          <p id="hero-desc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/catalog" className="btn-1">See All Products</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
