import React from "react";
import { getArticleById } from "../utils/utils";
import { useParams } from "react-router";
import CommentsList from "./CommentsList";
import ArticleVoteCard from "./ArticleVoteCard";
import { Box, CircularProgress } from "@mui/material";

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
    <Box>
      <div className="single-article">
        <div className="art-section-a">
          <img
            className="single-article-img"
            src={currentArticle.article_img_url}
          />
          <div className="art-topic">{currentArticle.topic}</div>
          <h2 className="art-title">{currentArticle.title}</h2>
          <ArticleVoteCard
            article_id={currentArticle.article_id}
            votes={currentArticle.votes}
          />
        </div>
        <p className="art-section-b">{currentArticle.body}</p>
        <div className="art-section-c">
          <p>by {currentArticle.author}</p>
          <p>{currentArticle.created_at}</p>
        </div>
      </div>
      <CommentsList article={currentArticle} />
    </Box>
  );
};

export default Article;
