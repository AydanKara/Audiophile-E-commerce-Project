import { useState } from "react";

const useCommentForm = (callback) => {
  const [values, setValues] = useState({ comment: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  const validate = (values) => {
    let errors = {};

    if (!values.comment) {
      errors.comment = "Comment is required";
    }

    return errors;
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await callback(values);
        setValues({ comment: "" });
      } catch (error) {
        setServerError(
          error.message || "An error occurred while adding the comment"
        );
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

export default useCommentForm;
