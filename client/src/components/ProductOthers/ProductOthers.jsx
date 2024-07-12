import { Link } from "react-router-dom";
import "./ProductOthers.css";

const ProductOthers = () => {
  return (
    <div className="product-others">
      <h3>you may also like</h3>
      <ul className="others-list">
        {/* <% for (const other of product.others) { %> */}
        <li className="other-item">
          <div className="other-img">
            <img src="/shared/image-zx9-speaker.jpg" alt="Product Image" />
          </div>
          <h5>XX59</h5>
          <Link to="/products/:id" className="btn-1">
            See Product
          </Link>
        </li>
        <li className="other-item">
          <div className="other-img">
            <img src="/shared/image-zx9-speaker.jpg" alt="Product Image" />
          </div>
          <h5>XX59</h5>
          <Link to="/products/:id" className="btn-1">
            See Product
          </Link>
        </li>
        <li className="other-item">
          <div className="other-img">
            <img src="/shared/image-zx9-speaker.jpg" alt="Product Image" />
          </div>
          <h5>XX59</h5>
          <Link to="/products/:id" className="btn-1">
            See Product
          </Link>
        </li>
        {/* <% } %> */}
      </ul>
    </div>
  );
};

export default ProductOthers;
