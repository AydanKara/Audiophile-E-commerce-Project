import { useEffect, useState } from "react";
import * as categoriesService from "../services/categoriesService";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import CategoryProducts from "../components/Categories/CategoryProducts/CategoryProducts";

const CatalogCategoryPage = () => {
  const { categoryTitle } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    categoriesService
      .getProductsByCategory(categoryTitle)
      .then((result) => setCategory(result));
  }, [categoryTitle]);

  return (
    <main>
      <div className="category-heading">
        <h1 className="heading-title">{categoryTitle}</h1>
      </div>
      <CategoryProducts products={category} />
      <Categories />
    </main>
  );
};

export default CatalogCategoryPage;
