import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://northcoders-news-7ei3.onrender.com/api`,
});

export const getArticles = ()=> {
  return ncApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export const getArticleById=(article_id)=> {
  return ncApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export const getCommentsByArticleId = (article_id) => {
  return ncApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}
