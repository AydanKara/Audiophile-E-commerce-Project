import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductItem from "./ProductItem/ProductItem";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((result) => setProducts(result));
  }, []);
  products.map((product) => console.log((product.category)))
  return (
    <section className="container">
      <div className="products-wrapper">
        <ul className="product-list">
          {products.map((product) => (
            <ProductItem key={product._id} {...product} />
          ))}
        </ul>

        {products.length === 0 && (
          <p className="no-products">There are currently no products added</p>
        )}
      </div>
    </section>
  );
};

export default Products;
