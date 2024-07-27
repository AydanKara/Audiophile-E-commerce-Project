/* eslint-disable react/prop-types */
import ProductItem from "../../Products/ProductItem/ProductItem"

const CategoryProducts = ({products}) => {
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
  )
}

export default CategoryProducts