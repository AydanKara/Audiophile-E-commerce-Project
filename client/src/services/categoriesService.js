import * as request from "../api/request";

const categoriesUrl = "https://audiophile-e-commerce-project-2.onrender.com/data/categories";
const productsUrl = "https://audiophile-e-commerce-project-2.onrender.com/data/products";

export const getCategories = async () => {
  const result = await request.get(`${categoriesUrl}`);
  return result;
};

export const getProductsByCategory = async (title) => {
  const query = new URLSearchParams({
    where: `category="${title}"`,
  });
  // server filtering
  const result = await request.get(`${productsUrl}?${query}`);

  return result;
};
