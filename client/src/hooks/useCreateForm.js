import useForm from "./useForm";

const useCreateForm = (callback) => {
  const {
    values,
    setValues,
    errors,
    serverError,
    setErrors,
    setServerError,
    onChange,
    resetForm,
  } = useForm({
    category: "",
    name: "",
    image: "",
    price: "",
    description: "",
    features: "",
  });

  const validate = (values) => {
    let errors = {};

    // Category validation
    if (!values.category) {
      errors.category = "Category is required";
    }

    // Name validation: must be at least 6 characters long
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 6) {
      errors.name = "Name must be at least 6 characters long";
    }

    // Image validation: must be a valid URL
    if (!values.image) {
      errors.image = "Image URL is required";
    } else if (!/^https?:\/\/.+\..+/.test(values.image)) {
      errors.image = "Image must be a valid URL";
    }

    // Price validation: must be a positive number
    if (!values.price) {
      errors.price = "Price is required";
    } else if (isNaN(values.price) || values.price <= 0) {
      errors.price = "Price must be a positive number";
    }

    // Description validation: must be at least 10 characters long
    if (!values.description) {
      errors.description = "Description is required";
    } else if (values.description.length < 10) {
      errors.description = "Description must be at least 10 characters long";
    }

    // Features validation: must be at least 20 characters long
    if (!values.features) {
      errors.features = "Features are required";
    } else if (values.features.length < 20) {
      errors.features = "Features must be at least 20 characters long";
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
        setServerError(
          error.message || "An error occurred while creating the product"
        );
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return {
    values,
    setValues,
    errors,
    serverError,
    onChange,
    onSubmit,
  };
};
export default useCreateForm;
