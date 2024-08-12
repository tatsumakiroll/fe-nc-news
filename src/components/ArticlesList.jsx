import React from "react";
import { getArticles } from "../utils/utils";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import SortOrder from "./SortOrder";
import { Box, Grid, CircularProgress, Pagination } from "@mui/material";
import Topics from "./Topics";

const ArticlesList = () => {
  const [articles, setArticles] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(true);
  const [sort, setSort] = React.useState("");
  const [order, setOrder] = React.useState("");

  const topicQuery = searchParams.get("topic");

  React.useEffect(() => {
    getArticles(topicQuery, sort, order).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [topicQuery, sort, order]);

  if (loading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" flexDirection={"row"}>
        <Topics />
        <SortOrder setSort={setSort} setOrder={setOrder} />
      </Box>
      <Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
        {articles.map((article) => (
          <ArticleCard
            key={article.article_id}
            article_id={article.article_id}
            topic={`${article.topic}`}
            author={article.author}
            title={article.title}
            created_at={article.created_at}
            article_img_url={article.article_img_url}
          />
        ))}
      </Grid>
      <Pagination count={8} shape="rounded" sx={{ margin: "1rem"}} />
    </Box>
  );
};

export default ArticlesList;
