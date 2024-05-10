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

const handleDelete = (event) => {
  if(currentUser===author)
  deleteComment(event.target.value)

};

  return (
    <div className="comment-card">
      <p className="comment-body">{body}</p>
      <h4 className="comment-body">{author}</h4>
      <p className="comment-body">{created_at}</p>
      <p className="comment-vote">{votes}</p>
      <button id="comment-delete" value={comment_id} onClick={handleDelete}>
      ❌
      </button>
    </div>
  );
};

export default CommentCard;
