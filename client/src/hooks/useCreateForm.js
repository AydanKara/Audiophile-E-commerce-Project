import useForm from "./useForm";

const useCreateForm = (callback) => {
  const {
    values,
    errors,
    serverError,
    setErrors,
    setServerError,
    onChange,
    resetForm,
  } = useForm(
    {},
    {
      category: "",
      name: "",
      image: "",
      price: "",
      description: "",
      features: "",
    }
  );

  const validate = (values) => {
    let errors = {};

    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.image) {
      errors.image = "Image URL is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    } else if (isNaN(values.price) || values.price <= 0) {
      errors.price = "Price must be a positive number";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.features) {
      errors.features = "Features are required";
    }

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await callback(values);
        resetForm();
      } catch (error) {
        setServerError(error.message || "An error occurred while creating the product");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    values,
    errors,
    serverError,
    onChange,
    onSubmit,
  };
};
export default useCreateForm;
