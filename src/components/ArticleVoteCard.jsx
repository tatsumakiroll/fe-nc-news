import React from "react";
import { patchArticleVotes } from "../utils/utils";

const ArticleVoteCard = ({ article_id, votes }) => {
  const [voteIncrement, setVote] = React.useState(0);

  const handleUpVote = () => {
    patchArticleVotes(article_id, 1);
    setVote((vote) => vote + 1);
  };

  const handleDownVote = () => {
    patchArticleVotes(article_id, -1);
    setVote((vote) => vote - 1);
  };

  return (
    <div className="article-vote">
      <p className="article-vote-count">{votes}</p>
      <button
        disabled={voteIncrement === 1}
        className="vote-button"
        onClick={handleUpVote}
      >
        like
      </button>
      <button
        disabled={voteIncrement === -1}
        className="vote-button"
        onClick={handleDownVote}
      >
        dislike
      </button>
    </div>
  );
};

export default ArticleVoteCard;
