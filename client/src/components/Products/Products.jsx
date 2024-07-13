import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import ProductItem from "./ProductItem/ProductItem";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((result) => setProducts(result));
  }, []);

  console.log(products);
  return (
    <section className="container">
      <div className="products-wrapper">
        <ul className="product-list">
          <ProductItem />
          <ProductItem />
        </ul>
      </div>
    </section>
  );
};

export default Products;
