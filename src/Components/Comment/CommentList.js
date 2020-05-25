import React from "react";
import { Comment } from "./Comment";
import "./comment.scss";

export const CommentList = ({ comments, removeCommentHandler }) => {
  return (
    <ul className="list-group mt-5">
      {comments.comments.map((comment) => (
        <li className="media list-group-item mb-4" key={comment.id}>
            <Comment 
              comment={comment} 
              removeCommentHandler={removeCommentHandler}  
            />
        </li>
      ))}
    </ul>
  );
};
