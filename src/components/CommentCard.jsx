import React from "react";
import { deleteComment } from "../utils/utils";
import { UserLoginContext } from "../context/UserLoginContext";

const CommentCard = ({
  comment_id,
  body,
  author,
  created_at,
  votes
}) => {
const { currentUser } = React.useContext(UserLoginContext);
const isAuthor = currentUser===author
const handleDelete = (event) => {
  deleteComment(event.target.value)
};

  return (
    <div className="comment-card">
      <p className="comment-body">{body}</p>
      <h4 className="comment-body">{author}</h4>
      <p className="comment-body">{created_at}</p>
      <p className="comment-vote">{votes}</p>
      {isAuthor && (
        <button  value={comment_id} onClick={handleDelete} id="delete-button">
          delete
        </button>
      )}
    </div>
  );
};

export default CommentCard;