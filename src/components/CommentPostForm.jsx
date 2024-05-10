import React from "react";
import { postComment } from "../utils/utils";

const CommentPostForm = ({ setComments, article_id }) => {
  const [username, setUsername] = React.useState("");
  const [newCommentBody, setNewCommentBody] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newCommentBody, username).then((data) => {
      setComments((comments) => {
        return [data, ...comments];
      });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post"></label>
        <button className="comment-button" type="submit">
          Comment
        </button>
        <input
          required
          className="comment-form"
          type="text"
          id="post"
          name="post"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </form>
      <textarea
        required
        value={newCommentBody}
        onChange={(e) => {
          setNewCommentBody(e.target.value);
        }}
        className="comment-form"
        rows="5"
        cols="50"
        name="comment"
        form="post"
        placeholder="What do you have to say for yourself?..."
      ></textarea>
    </>
  );
};

export default CommentPostForm;
