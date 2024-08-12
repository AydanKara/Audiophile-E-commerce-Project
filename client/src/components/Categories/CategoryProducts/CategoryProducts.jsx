/* eslint-disable react/prop-types */
import ProductItem from "../../Products/ProductItem/ProductItem";

const CategoryProducts = ({ products }) => {
  return (
    <section className="container">
      <div className="products-wrapper">
        <ul className="product-list">
          {products.map((product, index) => (
            <ProductItem
              key={product._id}
              product={product}
              isReversed={index % 2 !== 0}
            />
          ))}
        </ul>

        {products.length === 0 && (
          <p className="no-products">There are currently no products added</p>
        )}
      </div>
    </section>
  );
};

export default CategoryProducts;
