import * as request from "../api/request";

const baseUrl = "https://audiophile-e-commerce-project-2.onrender.com/users";

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });

  return result;
};

export const register = async (email, username, password) => {
  const result = await request.post(`${baseUrl}/register`, {
    email,
    username,
    password,
  });

  return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);
