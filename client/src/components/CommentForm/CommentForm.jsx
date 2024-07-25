/* eslint-disable react/prop-types */
import "./CommentForm.css";

const CommentForm = ({ addComment }) => {
  return (
    <form className="comment-form" onSubmit={addComment}>
      <textarea
        name="comment"
        placeholder="Add your comment"
        required
        defaultValue={""}
      />
      <button type="submit" className="btn-1">
        Add comment
      </button>
    </form>
  );
};

export default CommentForm;
