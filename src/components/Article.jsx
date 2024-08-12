import React from "react";
import { getArticleById } from "../utils/utils";
import { useParams } from "react-router";
import CommentsList from "./CommentsList";
import ArticleVoteCard from "./ArticleVoteCard";
import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  Card,
  CardMedia,
  Chip,
} from "@mui/material";

const Article = () => {
  const [currentArticle, setCurrentArticle] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { article_id } = useParams();

  React.useEffect(() => {
    getArticleById(article_id).then((data) => {
      setCurrentArticle(data);
      setLoading(false);
    });
  }, [currentArticle]);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid sx={{ margin: "1rem", justifyContent: "center" }}>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Chip
            label={currentArticle.topic}
            size="small"
            sx={{
              width: "auto",
              borderRadius: 1,
              position: "absolute",
              color: "#2b317a",
              bgcolor: "#ded5f2",
              margin: "0.5rem",
            }}
          >
            {currentArticle.topic}
          </Chip>
          <Box
            sx={{
              background:`${currentArticle.article_img_url}`,
              width: "auto",
              height: "240",
            }}
          >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "serif",
              padding: "2rem",
              fontWeight: "600",
              lineHeight: "0.9",
            }}
          >
            {currentArticle.title}
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ justifyContent: "center" }}>
        <ArticleVoteCard
          article_id={currentArticle.article_id}
          votes={currentArticle.votes}
        />
        <Typography variant="h6" sx={{ fontFamily: "serif", fontsize: "rem" }}>
          {currentArticle.body}
        </Typography>
        <Stack>
          <p>by {currentArticle.author}</p>
          <p>{currentArticle.created_at}</p>
        </Stack>
      </Stack>
      <CommentsList article={currentArticle} />
    </Grid>
  );
};

export default Article;
