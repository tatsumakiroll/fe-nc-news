import React from "react";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../utils/utils";
import { useParams } from "react-router";
import CommentPostForm from "./CommentPostForm";
import { Grid } from "@mui/material";

const CommentsList = () => {
  const [comments, setComments] = React.useState([]);
  const { article_id } = useParams();

  React.useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data);
    });
  }, [comments]);

  return (
    <Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment_id={comment.comment_id}
          body={comment.body}
          author={comment.author}
          created_at={comment.created_at}
          votes={comment.votes}
        />
      ))}
      <CommentPostForm article_id={article_id} setComments={setComments} />
    </Grid>
  );
};
export default CommentsList;
