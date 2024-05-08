import React from "react";
import { getArticleById } from "../utils/utils";
import { useParams } from "react-router";
import CommentsList from "./CommentsList";
import ArticleVoteCard from './ArticleVoteCard'
import Lottie from "lottie-react";
import loadingGraphic from "../assets/loadingGraphic.json";

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
      <div>
        <Lottie animationData={loadingGraphic} />
      </div>
    );
  }

  return (
    <section>
    <div className="single-article">
      <img className="single-article-img"src={currentArticle.article_img_url} />
      <ArticleVoteCard className="" article_id={currentArticle.article_id} votes={currentArticle.votes}/>
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
