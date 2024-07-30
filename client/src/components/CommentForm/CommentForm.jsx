/* eslint-disable react/prop-types */
import "./CommentForm.css";

const CommentForm = ({ onSubmit, onChange, values, errors }) => {
  return (
    <form className="comment-form" onSubmit={onSubmit}>
      {errors.comment && <span className="error">{errors.comment}</span>}
      <textarea
        name="comment"
        placeholder="Add your comment"
        onChange={onChange}
        value={values.comment}
        className={errors.comment ? "error-input" : ""}
      />
      <button type="submit" className="btn-1">
        Add comment
      </button>
    </form>
  );
};

export default CommentForm;
