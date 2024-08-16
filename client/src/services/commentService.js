import * as request from "../api/request";

const baseUrl = "https://audiophile-e-commerce-project-2.onrender.com/data/comments";

export const getProductsComments = async (productId) => {
  const query = new URLSearchParams({
    where: `productId="${productId}"`,
  });
  // server filtering
  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const create = async (productId, username, text) => {
  const newComment = request.post(baseUrl, {
    productId,
    username,
    text,
  });

  return newComment;
};
