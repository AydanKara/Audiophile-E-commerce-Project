import "./Categories.css"
import CategoryItem from "./CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <section className="products-categories">
      <div className="container">
        <div className="products-categories-wrapper">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </section>
  );
};

export default Categories;
