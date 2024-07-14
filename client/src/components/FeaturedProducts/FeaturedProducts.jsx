import FeaturedProductItem from "./FeaturedProductItem/FeaturedProductItem";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
    <section id="featured-products">
      <h3>Featured products</h3>
      <div className="container">
        <FeaturedProductItem />
        <FeaturedProductItem />
        <FeaturedProductItem />
      </div>
    </section>
  );
};

export default FeaturedProducts;
