const baseUrl = "http://localhost:3030/jsonstore/categories";

export const create = async (category, productData) => {
  const response = await fetch(`${baseUrl}/${category}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  const result = await response.json();
  console.log(result)
  return result;
};
