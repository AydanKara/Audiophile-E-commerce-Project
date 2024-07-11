import Categories from "../components/Categories/Categories";
import "../styles/catalog.css";


const CatalogPage = () => {
  return (
    <main>
        <div className="category-heading">
          <h1>All Products</h1>
        </div>
        
      <Categories />
    </main>
  );
};

export default CatalogPage;
