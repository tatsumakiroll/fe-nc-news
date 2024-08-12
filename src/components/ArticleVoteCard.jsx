import React from "react";
import { patchArticleVotes } from "../utils/utils";
import { Box, Button, Typography, Card } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const ArticleVoteCard = ({ article_id, votes }) => {
  const [voteIncrement, setVote] = React.useState(0);

  const handleUpVote = () => {
    patchArticleVotes(article_id, 1);
    setVote((vote) => vote + 1);
  };

  const handleDownVote = () => {
    patchArticleVotes(article_id, -1);
    setVote((vote) => vote - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Card
        sx={{
          marginLeft: "2rem",
          bgcolor: "#2b317a",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography sx={{ color: "white", padding: "1rem", fontWeight:"650", marginLeft:"0.5rem"}}>
          {votes}
        </Typography>
        <Button
          disabled={voteIncrement === 1}
          className="vote-button"
          onClick={handleUpVote}
        >
          <ThumbUpOffAltIcon />
        </Button>
        <Button
          disabled={voteIncrement === -1}
          className="vote-button"
          onClick={handleDownVote}
        >
          <ThumbDownOffAltIcon />
        </Button>
      </Card>
    </Box>
  );
};

export default ArticleVoteCard;
