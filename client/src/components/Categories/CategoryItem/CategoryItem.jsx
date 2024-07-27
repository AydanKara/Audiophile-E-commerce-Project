/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ title, image }) => {
  return (
    <div className="category-cart">
      <div className="category-img-wrapper">
        <img className="category-img" src={image} alt={title} />
      </div>
      <div className="category-title">
        <h6>{title}</h6>
        <p className="btn-2">
          <Link to={`/catalog/${title}`}>Shop</Link>
          <img src="/shared/icon-arrow-right.svg" alt="icon-arrow-right" />
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
