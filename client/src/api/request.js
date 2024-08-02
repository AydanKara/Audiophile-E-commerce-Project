const buildOptions = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  const token = localStorage.getItem("accessToken");
  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  return options;
};

export const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (response.status === 204) {
    return {};
  }

  if (response.status === 403) {
    throw new Error("Email address or password incorrect");
  }

  const result = await response.json();

  if (!response.ok) {
    throw new Error("Error:" + response.status);
  }

  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const patch = request.bind(null, "PATCH");
export const remove = request.bind(null, "DELETE");
