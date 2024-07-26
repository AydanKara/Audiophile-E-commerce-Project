/* eslint-disable react/prop-types */
import "./CommentForm.css";

const CommentForm = ({ onSubmit, onChange, values }) => {
  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <textarea
        name="comment"
        placeholder="Add your comment"
        required
        onChange={onChange}
        value={values.comment}
      />
      <button type="submit" className="btn-1">
        Add comment
      </button>
    </form>
  );
};

export default CommentForm;
