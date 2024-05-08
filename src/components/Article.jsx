import React from "react";
import { getArticleById } from "../utils/utils";
import { useParams } from "react-router";
import CommentsList from "./CommentsList";

const Article = () => {
  const [currentArticle, setCurrentArticle] = React.useState([]);
  const { article_id } = useParams();

  React.useEffect(() => {
    getArticleById(article_id).then((data) => {
      setCurrentArticle(data);
    });
  }, [currentArticle]);

  return (
    <section>
    <div className="single-article">
      <img className="single-article-img"src={currentArticle.article_img_url} />
      <p>{currentArticle.topic}</p>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.body}</p>
      <p>by {currentArticle.author}</p>
      <p>{currentArticle.created_at}</p>
    </div>
    < CommentsList article={currentArticle}/>
    </section>
  );
};

export default Article;
