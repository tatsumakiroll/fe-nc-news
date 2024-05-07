import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://northcoders-news-7ei3.onrender.com/api/`,
});

function getArticles() {
  return ncApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

function getArticleById(article_id) {
  return ncApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export { getArticles, getArticleById };
