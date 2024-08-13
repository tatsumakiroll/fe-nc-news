import React from "react";
import { deleteComment } from "../utils/utils";
import { UserLoginContext } from "../context/UserLoginContext";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const CommentCard = ({ comment_id, body, author, created_at, votes }) => {
  const { currentUser } = React.useContext(UserLoginContext);
  const isAuthor = currentUser === author;
  const handleDelete = (event) => {
    deleteComment(event.target.value);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ marginLeft: "1rem", marginTop:"0.25rem"}}>
            {author}
          </Typography>

          <Button>
            <ThumbUpOffAltIcon fontSize="small"></ThumbUpOffAltIcon>
            <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
              {votes}
            </Typography>
          </Button>
          <Button>
            <ThumbDownOffAltIcon fontSize="small"></ThumbDownOffAltIcon>
          </Button>
          {isAuthor && (
            <Button
              value={comment_id}
              onClick={handleDelete}
              id="delete-button"
            >
              <DeleteIcon></DeleteIcon>
            </Button>
          )}
        </Stack>
        <Typography variant="body2">{body}</Typography>
        <Typography>{created_at}</Typography>
      </Card>
    </Grid>
  );
};

export default CommentCard;
