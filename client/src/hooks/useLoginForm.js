import useForm from "./useForm";

const useLoginForm = (callback) => {
  const {
    values,
    errors,
    serverError,
    setErrors,
    setServerError,
    onChange,
    resetForm,
  } = useForm({
    email: "",
    password: "",
  });

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be at least 6 characters";
    }

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await callback(values, setServerError);
        resetForm();
      } catch (error) {
        setServerError(error.message || "An error occurred while logging in");
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

export default useLoginForm;
