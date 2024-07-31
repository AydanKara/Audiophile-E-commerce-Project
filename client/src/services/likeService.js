import * as request from "../api/request";

const baseUrl = "http://localhost:3030/data/likes";

export const createLike = async (productId, userId) => {
  return await request.post(baseUrl, { productId, userId });
};

export const getLikes = async (productId) => {
  return await request.get(`${baseUrl}?where=productId%3D%22${productId}%22`);
};

export const checkUserLike = async (productId, userId) => {
  return await request.get(
    `${baseUrl}?where=productId%3D%22${productId}%22%20AND%20userId%3D%22${userId}%22`
  );
};