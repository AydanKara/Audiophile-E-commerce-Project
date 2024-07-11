import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import "../styles/catalog.css";

const CatalogPage = () => {
  return (
    <main>
      <div className="category-heading">
        <h1>All Products</h1>
      </div>
      <Products />
      <Categories />
    </main>
  );
};

export default CatalogPage;
