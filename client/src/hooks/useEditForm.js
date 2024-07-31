import { useEffect } from "react";
import useCreateForm from "./useCreateForm";
import * as productService from "../services/productService";

const useEditForm = (productId, callback) => {
  const { values, setValues, errors, serverError, onChange, onSubmit } =
    useCreateForm(callback);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await productService.getOne(productId);
        setValues(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId, setValues]);

  return {
    values,
    errors,
    serverError,
    onChange,
    onSubmit,
  };
};

export default useEditForm;
