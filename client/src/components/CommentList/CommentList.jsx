/* eslint-disable react/prop-types */
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.length === 0 ? <p className="no-comment">There are no comments for this product yet.</p> :
        comments.map(({username, text, _id}) => (
          <Comment key={_id} text={text} username={username} />
        ))}
    </div>
  );
};

export default CommentList;
