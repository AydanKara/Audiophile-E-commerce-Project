import { Link } from "react-router-dom";
import "./FeaturedProductItem.css";

const FeaturedProductItem = () => {
  return (
    <div id="product">
      <div className="media">
        <img className="product-img" src="/home/image-earphones-yx1.jpg" />
      </div>
      <div className="product-col">
        <h4>YX1 EARPHONES</h4>
        <Link to="/" className="btn-1 btn-alt-3">
          See product
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProductItem;
