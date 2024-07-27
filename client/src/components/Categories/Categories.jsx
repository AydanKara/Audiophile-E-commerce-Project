import { useEffect, useState } from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem/CategoryItem";
import * as categoriesService from "../../services/categoriesService";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesService.getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <section className="products-categories">
      <div className="container">
        <div className="products-categories-wrapper">
          {categories.map((category) => (
            <CategoryItem key={category._id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
