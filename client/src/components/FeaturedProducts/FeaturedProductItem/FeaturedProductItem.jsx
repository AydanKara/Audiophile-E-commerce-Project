/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./FeaturedProductItem.css";

const FeaturedProductItem = ({_id, image, name}) => {
  return (
    <div id="product">
      <div className="media">
        <img className="product-img" src={image} />
      </div>
      <div className="product-col">
        <h6>{name}</h6>
        <Link to={`/catalog/${_id}/details`} className="btn-1 btn-alt-3">
          See product
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProductItem;
