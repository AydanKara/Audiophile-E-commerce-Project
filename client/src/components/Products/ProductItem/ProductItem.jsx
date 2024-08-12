/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ product, isReversed }) => {
  return (
    <li className="product-item">
      <article>
        <div className={`product-wrapper ${isReversed ? "reversed" : ""}`}>
          {isReversed ? (
            <>
              <div className="col-2">
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="product-desc">{product.description}</p>
                  <Link
                    to={`/catalog/${product._id}/details`}
                    className="btn-1"
                  >
                    See Product
                  </Link>
                </div>
              </div>
              <div className="col-1">
                <div className="product-image">
                  <img src={product.image} alt="" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-1">
                <div className="product-image">
                  <img src={product.image} alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="product-desc">{product.description}</p>
                  <Link
                    to={`/catalog/${product._id}/details`}
                    className="btn-1"
                  >
                    See Product
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
