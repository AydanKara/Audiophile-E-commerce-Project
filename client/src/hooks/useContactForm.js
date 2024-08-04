import useForm from "./useForm";

const useContactForm = (callback) => {
  const {
    values,
    errors,
    serverError,
    setErrors,
    setServerError,
    onChange,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await callback(values);
      } catch (error) {
        setServerError(error.message);
      }
    }
  };

  return {
    values,
    errors,
    serverError,
    onChange,
    onSubmit,
    resetForm,
  };
};

export default useContactForm;
