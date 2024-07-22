import { useEffect, useState } from "react";
import * as productService from "../../services/productService";
import FeaturedProductItem from "./FeaturedProductItem/FeaturedProductItem";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    productService
      .featuredProducts()
      .then((result) => setFeaturedProducts(result));
  }, []);

  return (
    <section id="featured-products">
      <h3>Featured products</h3>
      <div className="container">
        {featuredProducts.map((product) => (
          <FeaturedProductItem key={product._id} {...product} />
        ))}

        {!featuredProducts.length && (
          <p className="no-products">There are currently no products added</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
