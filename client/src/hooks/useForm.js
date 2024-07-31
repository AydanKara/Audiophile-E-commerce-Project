import { useState } from "react";

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

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

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setServerError("");
  };

  return {
    values,
    setValues,
    errors,
    serverError,
    setErrors,
    setServerError,
    onChange,
    resetForm,
  };
};

export default useForm;
