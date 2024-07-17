import { useState } from "react";

const useForm = (submitHandler, initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    setValues,
    onChange,
    onSubmit,
    resetForm,
  };
};

export default useForm;
