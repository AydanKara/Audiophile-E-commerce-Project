import useForm from "./useForm";

const useRegisterForm = (callback) => {
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
    username: "",
    password: "",
    repass: "",
  });

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be at least 6 characters";
    }

    if (!values.repass) {
      errors.repass = "Confirm Password is required";
    } else if (values.repass !== values.password) {
      errors.repass = "Passwords do not match";
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
        setServerError(error.message || "An error occurred while registering");
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

export default useRegisterForm;
