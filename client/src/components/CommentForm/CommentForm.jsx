/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./CommentForm.css"

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form className='comment-form' onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment"
        required
      />
      <button type="submit" className='btn-1'>Add comment</button>
    </form>
  );
};

export default CommentForm;