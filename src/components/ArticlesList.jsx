import React from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

const ArticlesList = () => {
  const [currentArticles, setCurrentArticles] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://northcoders-news-7ei3.onrender.com/api/articles")
      .then(({ data }) => {
        setCurrentArticles(data.articles);
      });
  }, []);

  return (
    <section className="articles-list">
      {currentArticles.map((article) => (
        <ArticleCard
          key={article.article_id}
          topic={article.topic}
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
