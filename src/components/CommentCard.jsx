import React from 'react'

const CommentCard = ({body,author,created_at, votes}) => {
  return (
    <div className="comment-card">
    <p className="comment-body">{body}</p>
    <p className="comment-body">{author}</p>
    <p className="comment-body">{created_at}</p>
    <p className="comment-vote">{votes}</p>
    </div>
  )
}

export default CommentCard