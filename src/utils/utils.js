import axios from "axios";

const ncApi = axios.create({
  baseURL: `https://northcoders-news-7ei3.onrender.com/api`,
});

export const getArticles = () => {
  return ncApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, body, username) => {
  return ncApi
    .post(`/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return ncApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};

export const patchArticleVotes = (article_id, number) => {
  return ncApi
    .patch(`/articles/${article_id}`, { inc_votes: number })
    .then((res) => {
      return res;
    });
};

export const getUsers = () => {
  return ncApi.get("/users").then(({ data }) => {
    return data.users;
  });
};
