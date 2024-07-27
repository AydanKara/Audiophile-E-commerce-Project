import * as request from "../api/request";

const categoriesUrl = "http://localhost:3030/data/categories";
const productsUrl = "http://localhost:3030/data/products";

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
