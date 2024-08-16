import * as request from "../api/request";

const baseUrl = "https://audiophile-e-commerce-project-2.onrender.com/data/products";

export const getAll = async () => {
  const result = await request.get(`${baseUrl}`);
  return result;
};

export const featuredProducts = async () => {
  const query = "sortBy=_createdOn%20desc&offset=0&pageSize=3";
  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const getOne = async (productId) => {
  const result = await request.get(`${baseUrl}/${productId}`);

  return result;
};

export const create = async (productData) => {
  const result = await request.post(`${baseUrl}`, productData);

  return result;
};

export const edit = async (productId, productData) => {
  const result = await request.put(`${baseUrl}/${productId}`, productData);

  return result;
};

export const remove = async (productId) => {
  request.remove(`${baseUrl}/${productId}`);
};
