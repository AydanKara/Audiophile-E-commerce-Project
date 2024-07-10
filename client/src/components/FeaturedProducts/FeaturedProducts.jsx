import FeaturedProductItem from "./FeaturedProductItem/FeaturedProductItem";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
    <section id="featured-products">
      <div className="container">
        <FeaturedProductItem />
        <FeaturedProductItem />
        <FeaturedProductItem />
      </div>
    </section>
  );
};

export default FeaturedProducts;
