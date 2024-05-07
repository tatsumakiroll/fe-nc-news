import React from "react";

const ArticleCard = ({ topic, author, created_at, article_img_url, title }) => {
  return (
    <div className="article-card">
      <img class="article-card-img" src={article_img_url} />
      <div className="article-card-details">
          <p>{topic}</p>
          <h2>{title}</h2>
          <p>{created_at}</p>
          <p>{author}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
