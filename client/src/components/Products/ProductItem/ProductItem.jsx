import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = () => {
  return (
    <li className="product-item">
      <article>
        <div className="product-wrapper">
          <div className="col-1">
            <div className="product-image">
              <img
                src="/categories/products/image-category-page-preview.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-2">
            <div className="product-info">
              <h2>XX99 MARK II HEADPHONES</h2>
              <p className="product-desc">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Link to="/products/:id" className="btn-1">
                See Product
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProductItem;
