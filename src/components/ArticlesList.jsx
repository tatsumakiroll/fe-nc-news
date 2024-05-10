import React from "react";
import Lottie from "lottie-react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/utils";
import loadingGraphic from "../assets/loadingGraphic.json";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(true);

  const topicQuery = searchParams.get("topic");

  React.useEffect(() => {
    getArticles(topicQuery).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [topicQuery]);

  if (loading) {
    return (
      <div>
        <Lottie animationData={loadingGraphic} />
      </div>
    );
  }
  return (
    <section className="articles-list">
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
    </section>
  );
};

export default ArticlesList;
