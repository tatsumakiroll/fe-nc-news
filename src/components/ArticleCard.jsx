import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  topic,
  author,
  created_at,
  article_img_url,
  title,
}) => {
  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <img className="article-card-img" src={article_img_url} />
      </Link>
      <div className="article-card-details">
        <Link to={`/articles/${article_id}`}>
          <div className="art-title">{title}</div>
        </Link>
        <p className="article-author">by {author}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
