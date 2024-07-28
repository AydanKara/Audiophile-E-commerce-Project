import { useState } from "react";

const useForm = (submitHandler, initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (values.username !== undefined && !values.username) {
      errors.username = "Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (values.repass !== undefined && !values.repass) {
      errors.repass = "Please confirm your password";
    } else if (
      values.repass !== undefined &&
      values.repass !== values.password
    ) {
      errors.repass = "Passwords do not match";
    }

    return errors;
  };

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setServerError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await submitHandler(values, setServerError);
      } catch (error) {
        console.log(error)
        setServerError(error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    errors,
    serverError,
    setValues,
    onChange,
    onSubmit,
    resetForm,
  };
};

export default useForm;
