// src/services/cartService.js
import * as request from "../api/request";

const baseUrl = "https://audiophile-e-commerce-project-2.onrender.com/data/cart";

export const addToCart = async (productId, userId) => {
  return await request.post(baseUrl, { productId, userId });
};

export const getCartItems = async (userId) => {
  return await request.get(`${baseUrl}?where=userId%3D%22${userId}%22`);
};

export const removeFromCart = async (cartItemId) => {
  return await request.remove(`${baseUrl}/${cartItemId}`);
};

export const getCartCount = async (userId) => {
  const cartItems = await getCartItems(userId);
  return cartItems.length;
};
