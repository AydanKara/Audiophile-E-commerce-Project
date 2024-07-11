import ProductItem from "./ProductItem/ProductItem";
import "./Products.css"

const Products = () => {
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
