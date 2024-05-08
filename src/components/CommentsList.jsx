import React from "react";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../utils/utils";
import {useParams} from 'react-router'

const CommentsList = () => {
  const [comments, setComments] = React.useState([]);
  const {article_id} = useParams()

  React.useEffect(() => {
    getCommentsByArticleId(article_id).then((data)=>{
        setComments(data)
    })
  }, []);

  return (
    <div className="comments-list">{comments.map((comment)=>(
    <CommentCard
    key={comment.comment_id}
    body={comment.body}
    author={comment.author}
    created_at={comment.created_at}
    votes={comment.votes}
    />
  ))}
  </div>)

}
export default CommentsList;
