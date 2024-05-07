import React from "react";
import Lottie from 'lottie-react'
import ArticleCard from "./ArticleCard";
import {getArticles} from '../utils/utils'
import loadingGraphic from '../assets/loadingGraphic.json'

const ArticlesList = () => {
  const [currentArticles, setCurrentArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getArticles()
      .then((data) => {
        setCurrentArticles(data);
        setLoading(false)
      });
  }, []);

  if(loading){
    return(
      <div>
        <Lottie animationData={loadingGraphic}/>
      </div>
    )
  }
  return (
    <section className="articles-list">
      {currentArticles.map((article) => (
        <ArticleCard 
          key={article.article_id}
          article_id={article.article_id}
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
