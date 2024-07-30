/* eslint-disable react/prop-types */

const Comment = ({ text, username }) => {
  return (
    <ul className="comment">
      <li className="comment-item">
        <strong className="comment-username">{username}: </strong>
        <p>{text}</p>
      </li>
    </ul>
  );
};

export default Comment;
