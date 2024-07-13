import * as request from "../api/request";

const baseUrl = "http://localhost:3030/jsonstore/categories";

export const getAll = async () => {
  const categories = ["Headphones", "Earphones", "Speakers"];
  const fetchedProducts = [];
  for (const category of categories) {
    const response = await request.get(`${baseUrl}/${category}`);
    if (response) {
      const categoryProducts = Object.values(response);
      fetchedProducts.push(...categoryProducts);
    } else {
      console.error(`Unexpected data format for category: ${category}`);
    }
  }
  return fetchedProducts;
};

export const create = async (category, productData) => {
  const result = await request.post(`${baseUrl}/${category}`, productData);

  return result;
};
